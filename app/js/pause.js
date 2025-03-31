let pausedMenuFocused = false;

function pauseGame() {
    if (gamePaused == true) {
        
        clearInterval(loop);
        clearInterval(timerCounter);

        UnscrambledWord.disabled = true;
        checkBtn.disabled = true;
        refreshWord.disabled = true;

        pausedMenu.classList.toggle('hidden');

    } else if (gamePaused == false) {

        loop = setInterval(gameLoop, 500);
        timerCounter = setInterval(createTimer, 1000);

        UnscrambledWord.disabled = false;
        checkBtn.disabled = false;
        refreshWord.disabled = false;

        pausedMenu.classList.toggle('hidden');
    }
}