# 🎧 90's HIP HOP — THE GOLDEN ERA

> **10 YEARS. 200 TRACKS. ONE GOLDEN ERA.**

A curated web archive exploring the tracks, artists, sounds, and culture that defined Hip-Hop from **1990 to 1999**.

---

## 🎤 ABOUT THE PROJECT

**90's Hip Hop** is a web project created to explore the music that defined one of the most important decades in Hip-Hop history.

The website contains **200 curated tracks from 1990 to 1999**, organized by year and region.

Users can explore:

- 🌆 East Coast
- 🌴 West Coast
- 📅 Year-by-year Top 10 lists
- 🏆 Essential Top 10 selections
- ▶️ YouTube links for each track

The goal was not simply to create a list of popular songs.

I wanted to create a small digital archive where users could explore how Hip-Hop changed throughout the 1990s.

---

## 💡 WHY I CREATED THIS PROJECT

I grew up during the 1990s, and Hip-Hop was an important part of the music and culture around me.

When I started learning **HTML, CSS, and JavaScript**, I wanted my first web project to be about something that I already understood and genuinely enjoyed.

Instead of creating a random practice website, I decided to combine:

**My personal interest in Hip-Hop**

with

**My new interest in web development.**

This project became a way for me to learn coding while organizing a subject that I already had a connection with.

---

## 🎯 PROJECT GOAL

The main goal was to build a website where users could easily explore 1990s Hip-Hop by:

**YEAR**

1990 → 1991 → 1992 → ... → 1999

and by:

**REGION**

EAST COAST ↔ WEST COAST

Each year contains a curated **Top 10 list**.

The project therefore contains:

**10 years × 10 tracks × 2 regional collections = 200 tracks**

---

## 🎵 HOW THE TRACKS WERE SELECTED

This project is **not a Billboard chart** and the rankings are not based only on record sales or commercial success.

Each track was selected by considering several factors:

- 🎤 Cultural impact
- 🎧 Influence on Hip-Hop
- 🥁 Production and sound
- ✍️ Lyrical significance
- 🗺️ Regional and scene importance
- 📀 Historical importance
- 🔥 How strongly the track represents the character of '90s Hip-Hop

Commercial success was considered, but a major hit was not automatically ranked above a less commercially successful track.

Some tracks were selected because they introduced an important sound, influenced later artists, represented an important regional scene, or became culturally significant over time.

When possible, the yearly lists were also designed to include different artists and styles instead of repeatedly selecting tracks from the same artist.

---

## 🏆 THE ESSENTIAL TOP 10

After completing the yearly lists, I created an additional **Essential Top 10**.

These tracks were selected from the larger archive to represent the decade as a whole.

The goal was to ask:

> **If someone wanted to understand the sound and culture of '90s Hip-Hop, which tracks should they hear?**

Separate Essential Top 10 lists were created for the East and West collections.

---

## ▶️ YOUTUBE INTEGRATION

Every track in the archive is connected to a YouTube video.

Instead of manually adding the same YouTube links again on the Essential Top 10 page, I used JavaScript to reuse the existing song data.

The basic logic is:

Song title  
↓  
Search the 200-song JavaScript database  
↓  
Find matching song  
↓  
Retrieve `youtubeUrl`  
↓  
Automatically create a clickable link  
↓  
Open YouTube in a new tab

This helped me understand an important programming idea:

> **Don't repeat data if you can reuse it.**

---

## 🧠 WHAT I LEARNED

This project started as a simple HTML exercise, but gradually became a much larger learning project.

While building it, I learned how **HTML, CSS, and JavaScript work together**.

### 🧱 HTML — Structure

I learned how to structure a webpage using elements such as:

`<header>`

`<nav>`

`<main>`

`<section>`

`<h1>` / `<h2>`

`<p>`

`<a>`

`<ol>` / `<ul>`

`<li>`

HTML taught me that a webpage needs a clear **structure before design or functionality is added.**

---

## 🎨 CSS — Design & Layout

I used CSS to control the visual design and layout of the website.

Some of the CSS concepts I practiced include:

- Classes
- Selectors
- Colors
- Font sizes
- Margin
- Padding
- Borders
- Width / Max-width
- Hover states
- Flexbox
- Gap
- Responsive Design
- Media Queries

One important concept I learned was the difference between:

**Padding = space inside an element**

and

**Margin = space outside an element**

---

## 📐 FLEXBOX

Flexbox was used to create layouts such as:

**EAST COAST ↔ WEST COAST**

and

**EAST TOP 10 ↔ WEST TOP 10**

Example:

```css
.coast-selection {
    display: flex;
    gap: 40px;
}

---

⚙️ JAVASCRIPT — INTERACTION & DATA
JavaScript controls the interactive parts of the website.
I learned and practiced:
- Variables (const)
- Arrays
- Objects
- Functions
- Conditions (if)
- Events
- addEventListener()
- forEach()
- find()
- Spread Operator (...)
- DOM manipulation
- querySelectorAll()
- textContent
- innerHTML

---

🎵 JAVASCRIPT SONG DATA
Each song is stored as a JavaScript Object.
Example:

{
    title: "Nas - N.Y. State of Mind",
    youtubeUrl: "https://www.youtube.com/..."
}

Ten songs are stored inside an Array for each year.
Example:

const songs1994 = [
    { title: "...", youtubeUrl: "..." },
    { title: "...", youtubeUrl: "..." }
];

This helped me understand the relationship between:
Object → Array → JavaScript → HTML

---

🗃️ COMBINING DATA
The individual yearly arrays were combined into one larger collection using the Spread Operator.

const allSongs = [
    ...songs1990,
    ...songs1991,
    ...songs1992,
    ...
    ...westSongs1999
];

This creates one searchable collection containing approximately 200 tracks.

---

🔎 AUTOMATIC TOP 10 YOUTUBE LINKS
One of the most interesting parts of the project was automatically connecting the Essential Top 10 songs to the existing YouTube data.
JavaScript finds all ranking items:

const rankingItems =
    document.querySelectorAll(".ranking-coast li");

Then it checks each song:

rankingItems.forEach(function (item) {

    const title = item.textContent.trim();

    const song = allSongs.find(function (song) {
        return song.title === title;
    });

});

If a matching song exists, JavaScript automatically creates the YouTube link.
This was one of the first times I understood how a webpage can use stored data instead of manually writing everything into HTML.

---

🐛 DEBUGGING
Another important part of this project was learning how to find and fix errors.
Some problems I encountered included:
- JavaScript variables not being found
- addEventListener() running on pages without the required buttons
- Missing HTML closing tags
- CSS changes not appearing because the file was not saved
- Duplicate songs
- Missing song arrays
- Layout problems on smaller screens
I learned to use:
Browser Developer Tools → Console
to understand JavaScript errors.
For example:
ReferenceError
helped me understand that JavaScript could not find a variable.
TypeError
helped me understand that JavaScript was trying to perform an action on something that did not exist.

---

🛟 GITHUB AS A BACKUP
During development, some song data was accidentally removed from script.js.
Because the project had already been saved to GitHub, I was able to open the previous version and restore the missing data.
This taught me that GitHub is not only a place to publish code.
It is also:
- 📦 A project backup
- 🕒 A history of changes
- 🔄 A way to recover previous work
- 🌐 A way to share a project with others

---

🧰 TECHNOLOGIES USED
Frontend
- 🌐 HTML5
- 🎨 CSS3
- ⚙️ JavaScript
Development
- 💻 Visual Studio Code
- 🌎 Browser Developer Tools
- 🐙 Git
- 🐙 GitHub
- 🚀 GitHub Pages
Content
- ▶️ YouTube

---

📂 PROJECT STRUCTURE

90s-hiphop-site/
│
├── index.html
│   └── Home page
│
├── east.html
│   └── East Coast yearly Top 10
│
├── west.html
│   └── West Coast yearly Top 10
│
├── ranking.html
│   └── Essential Top 10
│
├── about.html
│   └── Project and selection methodology
│
├── style.css
│   └── Website design and responsive layout
│
├── script.js
│   └── Song data, year buttons, rankings,
│       YouTube links and interaction
│
└── README.md
    └── Project documentation

---

🗺️ WEBSITE STRUCTURE

                    90'S HIP HOP
                         │
          ┌──────────────┴──────────────┐
          │                             │
     EAST COAST                    WEST COAST
          │                             │
     1990–1999                     1990–1999
          │                             │
     TOP 10 / YEAR                 TOP 10 / YEAR
          │                             │
          └──────────────┬──────────────┘
                         │
                 ESSENTIAL TOP 10
                         │
                       ABOUT

🗺️ WEBSITE STRUCTURE

                    90'S HIP HOP
                         │
          ┌──────────────┴──────────────┐
          │                             │
     EAST COAST                    WEST COAST
          │                             │
     1990–1999                     1990–1999
          │                             │
     TOP 10 / YEAR                 TOP 10 / YEAR
          │                             │
          └──────────────┬──────────────┘
                         │
                 ESSENTIAL TOP 10
                         │
                       ABOUT

---

💻 DEVELOPMENT PROCESS
The website was built step by step.

IDEA
  ↓
HTML STRUCTURE
  ↓
SONG RESEARCH
  ↓
200-TRACK DATASET
  ↓
CSS DESIGN
  ↓
JAVASCRIPT
  ↓
YOUTUBE CONNECTION
  ↓
RESPONSIVE DESIGN
  ↓
DEBUGGING
  ↓
GITHUB
  ↓
FINAL WEBSITE

---

This process helped me understand that web development is not simply about writing code.
It is a cycle of:
Understand → Write → Test → Debug → Improve

---

🎓 WHAT THIS PROJECT TAUGHT ME
Before this project, HTML, CSS, and JavaScript felt like separate subjects.
While building this website, I began to understand how they work together:
HTML creates the structure.
CSS controls how the structure looks.
JavaScript gives the website behavior and interaction.
The most important lesson was that coding is not just about copying code that works.
I learned to:
- Read code
- Understand what each part does
- Modify existing code
- Test changes in the browser
- Find errors
- Use the Console
- Fix problems step by step
- Reuse existing data
- Organize a larger project
- Save versions with Git and GitHub
This project became my first experience of turning a personal interest into a working interactive website.

---

🔮 FUTURE IMPROVEMENTS
Possible future improvements include:
- 💿 Album artwork
- 🔍 Search function
- 🎚️ Filters by year, artist, or region
- 🎤 Artist information
- 📀 Album information
- 🎧 Embedded music/video player
- 📱 Improved mobile interface
- 🗺️ Interactive Hip-Hop scene map
- 📊 Hip-Hop timeline
- ⭐ Personal favorite / save function

---

✊ FINAL THOUGHT
90's Hip Hop began as a coding exercise.
It became a project about learning how information, culture, design, and code can work together.
10 YEARS. 200 TRACKS. ONE GOLDEN ERA.

🎧 Welcome to the '90s.