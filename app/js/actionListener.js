// MAIN MENU BUTTONS

playBtn.addEventListener('click', function () {
    mainMenu.classList.toggle('hidden');

    startGame();
});

settingsBtn.addEventListener('click', function () {
    settingsMenu.classList.toggle('hidden');
});

quitBtn.addEventListener('click', function () {
    window.location = 'https://google.com';
});

// CLOSE SETTINGS MENU BUTTON

closeSettings.addEventListener('click', function () {
    settingsMenu.classList.toggle('hidden');
});

// GAME OVER BUTTONS

restartBtn.addEventListener('click', function () {
    gameOver.classList.toggle('hidden');

    startGame();
});

mainMenuBtn.addEventListener('click', function () {
    mainMenu.classList.toggle('hidden');
});

// PAUSED MENU BUTTONS

returnPausedBtn.addEventListener('click', function () {
    gamePaused = false;

    clearInterval(loop);
    clearInterval(timerCounter);

    pauseGame();
});

settingsPausedBtn.addEventListener('click', function () {

    pausedMenuFocused = false;

    settingsMenu.classList.toggle('hidden');
});

mainMenuPausedBtn.addEventListener('click', function () {
    window.location.reload();
});

// checks for escape key to pause game

document.addEventListener('keydown', function (e) {
    if (gameRunning == true) {
        if (e.key == 'Escape') {
            if (gamePaused == true) {

                if (pausedMenuFocused == false && !settingsMenu.classList.contains('hidden'))
                    return;

                gamePaused = false;
                pausedMenuFocused = false;
                pauseGame();

            } else if (gamePaused == false) {

                gamePaused = true;
                pausedMenuFocused = true;
                pauseGame();

            }
        }
    }
})

setInterval(() => {
    updateSettings();
}, 500);