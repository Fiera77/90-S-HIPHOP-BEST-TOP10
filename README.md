# 90's HIP HOP — THE GOLDEN ERA

[View the live website](https://90-s-hiphop-best-top10.vercel.app)

**10 YEARS. 200 YEARLY SELECTIONS. ONE GOLDEN ERA.**

A static HTML, CSS, and JavaScript archive exploring hip-hop from 1990 to 1999.
Browse ten yearly selections for each of two collections, then explore an
Essential Top 10 for each collection. No backend, API key, or production build is required.

## About the project

This project began as a first web development exercise, combining a personal
connection to 1990s hip-hop with learning HTML, CSS, JavaScript, and Git.
Its goal is to show how the decade's music, artists, sounds, and culture evolved.

The selections are personal editorial choices, not Billboard rankings.
Cultural impact, production, lyrical significance, influence, and scene importance
inform the lists. The original East collection also includes Southern and
Midwestern artists; its label is a browsing category, not a strict geographic classification.

There are **200 yearly list entries and 199 distinct title strings**.
Tha Alkaholiks — Daaam! appears in both the 1994 and 1995 West lists.
That editorial overlap is documented rather than silently replaced.
The Essential page has 20 selections. Public Enemy — Welcome to the Terrordome
is an additional selection outside the yearly lists.

## Run locally

Open `index.html` directly, or serve the folder to match deployed navigation:

```sh
python -m http.server 8000
```

Visit [localhost:8000](http://localhost:8000).
Internet access is needed to open YouTube videos, but the site itself uses local assets.

## Pages and files

| File | Purpose |
| --- | --- |
| `index.html` | Home and collection navigation |
| `east.html`, `west.html` | Year selection and yearly Top 10 |
| `ranking.html` | Two Essential Top 10 lists |
| `about.html` | Project background and selection method |
| `script.js` | Song data, explicit DOM rendering, year selection, Essential links |
| `style.css` | Backgrounds, layout, responsive rules, keyboard focus |
| `images/` | Original desktop and mobile background images |
| `tests/browser.test.cjs` | Browser regression tests |
| `.github/workflows/test.yml` | Automated browser checks on pushes and pull requests |

## How the interaction works

Each year contains an array of song objects with `title` and `youtubeUrl`.
`songCollections` maps each collection to its ten yearly arrays.
Clicking a year selects that array, replaces the ranking with an ordered list,
and updates the button's visual state and `aria-pressed` value.

The renderer explicitly looks up `#ranking`; it does not depend on the browser's
legacy behavior of exposing element IDs as global variables.
Titles are inserted with `textContent`, so apostrophes, ampersands, and markup-like
text are rendered as text.

The Essential page reuses yearly song data through `essentialSongs`, with one
additional entry for Welcome to the Terrordome. All 20 selections become
YouTube links opening in a new tab with `noopener noreferrer`.

## Corrections

- Removed the implicit `ranking` global and repeated year-specific listeners.
- Replaced repeated `innerHTML` writes with explicit ordered-list DOM rendering.
- Fixed the missing Welcome to the Terrordome Essential link.
- Corrected `as Kass` to `Ras Kass` and `When I'm on Damic` to `Whenimondamic`.
- Added year-button pressed state, live ranking announcements, and visible keyboard focus.
- Fixed narrow-screen overflow for long headings and ranking columns; year buttons wrap.
- Removed the unused player container; this site links to videos and does not embed a player.
- Replaced the malformed README, including its unclosed CSS fence and duplicated diagram.
- Added reproducible tests, a dependency lockfile, and GitHub Actions checks.

Content corrections are supported by [Ras Kass's track page](https://raskass.bandcamp.com/track/nature-of-the-threat-4)
and [Stones Throw's album listing](https://www.stonesthrow.com/store/soundpieces-da-antidote/).
The added Public Enemy link uses the [official artist-channel recording](https://www.youtube.com/watch?v=m5t7n-EeE1o).

## Test

Use Node.js 22 or newer:

```sh
npm ci
npx playwright install chromium
npm run check
npm test
```

If Chrome is already installed, the test runner can use it instead of downloading Chromium:

```powershell
$env:BROWSER_CHANNEL = "chrome"
npm test
```

The tests start and stop a temporary local HTTP server automatically.
They check all five pages and local assets, both collections across all ten years,
repeat selection, the 20 Essential links, the 200-entry dataset and video ID shapes,
keyboard selection, literal title rendering, and 320px/375px layouts.
They also disable the browser's legacy `window.ranking` property to exercise the original failure condition.

Local validation on 2026-10-13: **12 browser tests passed**, and JavaScript syntax checks passed.
Tests ran in headless installed Chrome on Windows. GitHub Actions uses Chromium on Linux;
its remote result should be checked separately.

Tests validate generated links and URL structure, not continued availability of all
external videos, regional playback permissions, recording accuracy, release years,
or the historical merits of the rankings. There is no YouTube API integration.
A full editorial audit of the original dataset remains separate from code verification.

## Learning and future work

The project demonstrates semantic HTML, responsive flex layouts, JavaScript arrays
and objects, data reuse, DOM events, and Git history.
Potential extensions include search, album artwork, artist details, and favorites.
