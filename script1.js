document.addEventListener("DOMContentLoaded", function() {
    let introScreen = document.getElementById("intro-screen");
    let valentineScreen = document.getElementById("valentine-screen");
    let winScreen = document.getElementById("win-screen");
    let loseScreen = document.getElementById("lose-screen");
    let bgMusic = document.getElementById("bg-music");
    let winSound = document.getElementById("win-sound");
    let loseSound = document.getElementById("lose-sound");

    // Click to Start
    introScreen.addEventListener("click", function() {
        introScreen.classList.add("hidden");
        valentineScreen.classList.remove("hidden");
        bgMusic.play();
    });

    // Yes Button (Win)
    document.getElementById("yes-btn").addEventListener("click", function() {
        valentineScreen.classList.add("hidden");
        winScreen.classList.remove("hidden");
        bgMusic.pause();
        winSound.play();
    });

    // No Button (Lose)
    document.getElementById("no-btn").addEventListener("click", function() {
        valentineScreen.classList.add("hidden");
        loseScreen.classList.remove("hidden");
        bgMusic.pause();
        loseSound.play();
    });
});
