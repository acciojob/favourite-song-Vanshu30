//your code here
// JavaScript to dynamically update the song details
document.addEventListener("DOMContentLoaded", function() {
    const songName = "Shape of You"; // Replace with your favorite song
    const songLink = "https://www.youtube.com/watch?v=JGwWNGJdvx8"; // Replace with the YouTube link

    const linkElement = document.getElementById("song-link");
    linkElement.textContent = songName;
    linkElement.href = songLink;
});
