console.log("JavaScript is working!");

const songs1990 = [
    { title: "Public Enemy - Brothers Gonna Work It Out", youtubeUrl: "https://www.youtube.com/watch?v=pL2vVWEgKE0&list=RDpL2vVWEgKE0&start_radio=1" },
    { title: "LL Cool J - Mama Said Knock You Out", youtubeUrl: "https://www.youtube.com/watch?v=vimZj8HW0Kg&list=RDvimZj8HW0Kg&start_radio=1" },
    { title: "A Tribe Called Quest - Bonita Applebum", youtubeUrl: "https://www.youtube.com/watch?v=6xE6ZWwJezg&list=RD6xE6ZWwJezg&start_radio=1" },
    { title: "Eric B. & Rakim - Let the Rhythm Hit 'Em", youtubeUrl: "https://www.youtube.com/watch?v=P2wMJ3Liq5Y&list=RDP2wMJ3Liq5Y&start_radio=1" },
    { title: "EPMD - Gold Digger", youtubeUrl: "https://www.youtube.com/watch?v=5HN58C3JsUM&list=RD5HN58C3JsUM&start_radio=1" },
    { title: "Gang Starr - Just to Get a Rep", youtubeUrl: "https://www.youtube.com/watch?v=qAjAdM25KHE&list=RDqAjAdM25KHE&start_radio=1" },
    { title: "Public Enemy - 911 Is a Joke", youtubeUrl: "https://www.youtube.com/watch?v=JZDIitWz8Go&list=RDJZDIitWz8Go&start_radio=1" },
    { title: "A Tribe Called Quest - Can I Kick It?", youtubeUrl: "https://www.youtube.com/watch?v=O3pyCGnZzYA&list=RDO3pyCGnZzYA&start_radio=1" },
    { title: "Boogie Down Productions - Love's Gonna Get'cha (Material Love)", youtubeUrl: "https://www.youtube.com/watch?v=4NACMjwR5DE&list=RD4NACMjwR5DE&start_radio=1" },
    { title: "Poor Righteous Teachers - Rock Dis Funky Joint", youtubeUrl: "https://www.youtube.com/watch?v=gfMURCgM3GY&list=RDgfMURCgM3GY&start_radio=1" }
];


const songs1991 = [
    { title: "Geto Boys - Mind Playing Tricks on Me", youtubeUrl: "https://www.youtube.com/watch?v=IJtHdkyo0hc&list=RDIJtHdkyo0hc&start_radio=1" },
    { title: "A Tribe Called Quest - Check the Rhime", youtubeUrl: "https://www.youtube.com/watch?v=1QWEPdgS3As&list=RD1QWEPdgS3As&start_radio=1" },
    { title: "Naughty by Nature - O.P.P.", youtubeUrl: "https://www.youtube.com/watch?v=idx3GSL2KWs&list=RDidx3GSL2KWs&start_radio=1" },
    { title: "Public Enemy - Can't Truss It", youtubeUrl: "https://www.youtube.com/watch?v=am9BqZ6eA5c&list=RDam9BqZ6eA5c&start_radio=1" },
    { title: "Brand Nubian - Slow Down", youtubeUrl: "https://www.youtube.com/watch?v=asVzJUPvTsQ&list=RDasVzJUPvTsQ&start_radio=1" },
    { title: "Main Source - Live at the Barbeque", youtubeUrl: "https://www.youtube.com/watch?v=XmCWfJAPwbA&list=RDXmCWfJAPwbA&start_radio=1" },
    { title: "De La Soul - Ring Ring Ring (Ha Ha Hey)", youtubeUrl: "https://www.youtube.com/watch?v=hm6Kkje7bBM&list=RDhm6Kkje7bBM&start_radio=1" },
    { title: "3rd Bass - Pop Goes the Weasel", youtubeUrl: "https://www.youtube.com/watch?v=bgHAD5jPhYc&list=RDbgHAD5jPhYc&start_radio=1" },
    { title: "PMD feat. LL Cool J - Rampage", youtubeUrl: "https://www.youtube.com/watch?v=Aa0tMZi-K0o&list=RDAa0tMZi-K0o&start_radio=1" },
    { title: "MC Breed & DFC - Ain't No Future in Yo' Frontin", youtubeUrl: "https://www.youtube.com/watch?v=3QdrkqqJ5Sg&list=RD3QdrkqqJ5Sg&start_radio=1" }
];

const songs1992 = [
    // 1992 TOP 10
];

const songs1993 = [
    // 1993 TOP 10
];

const songs1994 = [
    // 1994 TOP 10
];

const songs1995 = [
    // 1995 TOP 10
];

const songs1996 = [
    // 1996 TOP 10
];

const songs1997 = [
    // 1997 TOP 10
];

const songs1998 = [
    // 1998 TOP 10
];

const songs1999 = [
    // 1999 TOP 10
];

function showRanking(year, songs) {
    ranking.innerHTML = `
        <h2>${year} TOP 10</h2>
    `;

    for (let i = 0; i < songs.length; i++) {
        ranking.innerHTML += `
            <p>
                ${i + 1}.
                <a href="${songs[i].youtubeUrl}" target="_blank">
                    ${songs[i].title}
                </a>
            </p>
        `;
    }
}

const button1990 = document.getElementById("year-1990");
const button1991 = document.getElementById("year-1991");
const button1992 = document.getElementById("year-1992");
const button1993 = document.getElementById("year-1993");
const button1994 = document.getElementById("year-1994");
const button1995 = document.getElementById("year-1995");
const button1996 = document.getElementById("year-1996");
const button1997 = document.getElementById("year-1997");
const button1998 = document.getElementById("year-1998");
const button1999 = document.getElementById("year-1999");
const player = document.getElementById("player");

console.log(player);

console.log(button1990);

button1990.addEventListener("click", function () {
    showRanking(1990, songs1990);
});

button1991.addEventListener("click", function () {
    showRanking(1991, songs1991);
});

button1992.addEventListener("click", function () {
    showRanking(1992, songs1992);
});

button1993.addEventListener("click", function () {
    showRanking(1993, songs1993);
});

button1994.addEventListener("click", function () {
    showRanking(1994, songs1994);
});

button1995.addEventListener("click", function () {
    showRanking(1995, songs1995);
});

button1996.addEventListener("click", function () {
    showRanking(1996, songs1996);
});

button1997.addEventListener("click", function () {
    showRanking(1997, songs1997);
});

button1998.addEventListener("click", function () {
    showRanking(1998, songs1998);
});

button1999.addEventListener("click", function () {
    showRanking(1999, songs1999);
});