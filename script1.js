document.addEventListener("DOMContentLoaded", function() {
    let startScreen = document.getElementById("start-screen");
    let valentineScreen = document.getElementById("valentine-screen");
    let winScreen = document.getElementById("win-screen");
    let loseScreen = document.getElementById("lose-screen");
    let bgMusic = document.getElementById("bg-music");
    let voiceStart = document.getElementById("voice-start");
    let voiceWin = document.getElementById("voice-win");
    let voiceLose = document.getElementById("voice-lose");

    // Click to Start
    startScreen.addEventListener("click", function() {
        startScreen.classList.add("hidden");
        valentineScreen.classList.remove("hidden");
        bgMusic.play();
        voiceStart.play();
    });

    // Yes Button (Win)
    document.getElementById("yes-btn").addEventListener("click", function() {
        valentineScreen.classList.add("hidden");
        winScreen.classList.remove("hidden");
        bgMusic.pause();
        voiceWin.play();
    });

    // No Button (Lose)
    document.getElementById("no-btn").addEventListener("click", function() {
        valentineScreen.classList.add("hidden");
        loseScreen.classList.remove("hidden");
        bgMusic.pause();
        voiceLose.play();
    });
});


 
