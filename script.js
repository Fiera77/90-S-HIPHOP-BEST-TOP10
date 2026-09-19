console.log("JavaScript is working!");

const songs1990 = [
    "Song A",
    "Song B",
    "Song C"
];

console.log(songs1990);
console.log(songs1990[0]);

for (let i = 0; i < songs1990.length; i++) {
    console.log(songs1990[i]);
}

const button1990 = document.getElementById("year-1990");

console.log(button1990);

button1990.addEventListener("click", function () {
    console.log("1990 button clicked!");
    ranking.innerHTML = `
    <h2>1990 TOP 10</h2>
    `;
    for (let i = 0; i < songs1990.length; i++) {
    ranking.innerHTML += `<p>${i + 1}. ${songs1990[i]}</p>`;
}
});