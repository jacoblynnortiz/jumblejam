let mainMenu = document.getElementById('mainMenu');
let playBtn = document.getElementById('playBtn');

let restartBtn = document.getElementById('restartBtn');
let mainMenuBtn = document.getElementById('mainMenuBtn');

playBtn.addEventListener('click', function() {
    mainMenu.classList.toggle('hidden');

    startGame();
});

restartBtn.addEventListener('click', function() {
    gameOver.classList.toggle('hidden');

    startGame();
});

mainMenuBtn.addEventListener('click', function() {
    mainMenu.classList.toggle('hidden');
});