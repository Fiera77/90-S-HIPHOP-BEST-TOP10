const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const { chromium } = require('playwright');

const root = path.resolve(__dirname, '..');
let server, browser, baseURL;

before(async () => {
  server = http.createServer(async (request, response) => {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(root + path.sep)) {
      response.writeHead(403).end();
      return;
    }
    try {
      const content = await fs.readFile(file);
      const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png' };
      response.setHeader('Content-Type', (types[path.extname(file)] || 'application/octet-stream'));
      response.end(content);
    } catch {
      response.writeHead(404).end();
    }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  baseURL = `http://127.0.0.1:${server.address().port}`;
  browser = await chromium.launch({ headless: true, ...(process.env.BROWSER_CHANNEL ? { channel: process.env.BROWSER_CHANNEL } : {}) });
});

after(async () => {
  if (browser) await browser.close();
  if (server) await new Promise(resolve => server.close(resolve));
});

for (const file of ['index.html', 'east.html', 'west.html', 'ranking.html', 'about.html']) {
  test(`${file}: loads without script or local resource errors`, async () => {
    const page = await browser.newPage();
    try {
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      page.on('response', response => {
        if (response.url().startsWith(baseURL) && response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
      });
      await page.goto(`${baseURL}/${file}`, { waitUntil: 'networkidle' });
      assert.equal(await page.locator('nav a').count(), 5);
      for (const href of await page.locator('nav a').evaluateAll(links => links.map(link => link.getAttribute('href')))) {
        assert.equal((await page.request.get(`${baseURL}/${href}`)).status(), 200);
      }
      assert.deepEqual(errors, []);
    } finally { await page.close(); }
  });
}

for (const coast of ['east', 'west']) {
  test(`${coast}: all ten years, selection state, and explicit DOM access`, async () => {
    const page = await browser.newPage();
    try {
      // Remove HTML's legacy named global to reproduce the original dependency.
      await page.addInitScript(() => Object.defineProperty(window, 'ranking', { value: undefined, configurable: true }));
      await page.goto(`${baseURL}/${coast}.html`);
      for (let year = 1990; year <= 1999; year++) {
        await page.locator(`#year-${year}`).click();
        assert.equal(await page.locator('#ranking h2').textContent(), `${year} TOP 10`);
        assert.equal(await page.locator('#ranking ol li').count(), 10);
        assert.equal(await page.locator('.years button.active').count(), 1);
        assert.equal(await page.locator('.years button[aria-pressed="true"]').count(), 1);
        const expected = await page.evaluate(({ coast, year }) => songCollections[coast][year - 1990].map(song => song.title), { coast, year });
        assert.deepEqual(await page.locator('#ranking li a').allTextContents(), expected);
        const links = await page.locator('#ranking a').evaluateAll(nodes => nodes.map(node => ({ href: node.href, target: node.target, rel: node.rel })));
        assert.ok(links.every(link => new URL(link.href).hostname === 'www.youtube.com' && link.target === '_blank' && link.rel.includes('noopener')));
      }
      // Repeat a year to confirm old list entries are replaced.
      await page.locator('#year-1990').click();
      assert.equal(await page.locator('#ranking li').count(), 10);
    } finally { await page.close(); }
  });
}

test('Essential Top 10: all 20 titles resolve to reusable song links', async () => {
  const page = await browser.newPage();
  try {
    await page.goto(`${baseURL}/ranking.html`);
    assert.equal(await page.locator('.ranking-coast li').count(), 20);
    assert.equal(await page.locator('.ranking-coast li a').count(), 20);
    assert.equal(await page.locator('.ranking-coast a[rel="noopener noreferrer"]').count(), 20);
  } finally { await page.close(); }
});

test('Archive: 200 entries, ten per coast/year, valid video ID shapes', async () => {
  const page = await browser.newPage();
  try {
    await page.goto(`${baseURL}/east.html`);
    const data = await page.evaluate(() => ({ collections: songCollections, songs: allSongs }));
    assert.equal(data.songs.length, 200);
    for (const years of Object.values(data.collections)) {
      assert.equal(years.length, 10);
      for (const songs of years) assert.equal(songs.length, 10);
    }
    for (const song of data.songs) {
      assert.ok(song.title.trim());
      const url = new URL(song.youtubeUrl);
      assert.equal(url.protocol, 'https:');
      assert.equal(url.hostname, 'www.youtube.com');
      assert.match(url.searchParams.get('v'), /^[A-Za-z0-9_-]{11}$/);
    }
    console.log(`Archive unique titles: ${new Set(data.songs.map(song => song.title)).size}/200`);
  } finally { await page.close(); }
});

test('Renderer treats song titles as text and tolerates a missing container', async () => {
  const page = await browser.newPage();
  try {
    await page.goto(`${baseURL}/east.html`);
    await page.evaluate(() => showRanking(1990, [{ title: '<img src=x onerror="window.injected=true">', youtubeUrl: 'https://www.youtube.com/watch?v=abcdefghijk' }]));
    assert.equal(await page.locator('#ranking img').count(), 0);
    assert.ok((await page.locator('#ranking a').textContent()).startsWith('<img'));
    await page.evaluate(() => { document.getElementById('ranking').remove(); showRanking(1990, []); });
  } finally { await page.close(); }
});

test('Year selection works with the keyboard', async () => {
  const page = await browser.newPage();
  try {
    await page.goto(`${baseURL}/west.html`);
    await page.locator('#year-1994').focus();
    await page.keyboard.press('Enter');
    assert.equal(await page.locator('#ranking h2').textContent(), '1994 TOP 10');
    assert.equal(await page.locator('#year-1994').getAttribute('aria-pressed'), 'true');
  } finally { await page.close(); }
});

test('All pages fit mobile widths of 320px and 375px', async () => {
  for (const width of [320, 375]) {
    const page = await browser.newPage({ viewport: { width, height: 800 } });
    try {
      for (const file of ['index.html', 'east.html', 'west.html', 'ranking.html', 'about.html']) {
        await page.goto(`${baseURL}/${file}`);
        if (file === 'east.html' || file === 'west.html') await page.locator('#year-1996').click();
        const fits = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);
        assert.ok(fits, `${file} overflows at ${width}px`);
      }
    } finally { await page.close(); }
  }
});
