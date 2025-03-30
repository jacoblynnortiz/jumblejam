let mainMenu = document.getElementById('mainMenu');
let settingsMenu = document.getElementById('settingsMenu');

let playBtn = document.getElementById('playBtn');
let settingsBtn = document.getElementById('settingsBtn');
let closeSettings = document.getElementById('closeSettings');

let restartBtn = document.getElementById('restartBtn');
let mainMenuBtn = document.getElementById('mainMenuBtn');

playBtn.addEventListener('click', function() {
    mainMenu.classList.toggle('hidden');

    startGame();
});

settingsBtn.addEventListener('click', function() {
    settingsMenu.classList.toggle('hidden');
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
});

setInterval(() => {
    updateSettings();
}, 500);