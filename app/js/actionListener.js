playBtn.addEventListener('click', function() {
    mainMenu.classList.toggle('hidden');

    startGame();
});

settingsBtn.addEventListener('click', function() {
    settingsMenu.classList.toggle('hidden');
});

quitBtn.addEventListener('click', function() {
    window.location = 'https://google.com';
});

closeSettings.addEventListener('click', function() {
    settingsMenu.classList.toggle('hidden');
});

restartBtn.addEventListener('click', function() {
    gameOver.classList.toggle('hidden');

    startGame();
});

mainMenuBtn.addEventListener('click', function() {
    mainMenu.classList.toggle('hidden');

    timerBar.classList.remove('animate-timer');
});

setInterval(() => {
    updateSettings();
}, 500);