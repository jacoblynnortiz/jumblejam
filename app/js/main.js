let gameRunning = true;

let gameOver = document.getElementById('gameOver');

setInterval(() => {
    if(gameRunning) {
        update();
    } else {
        gameOver.style.display = 'flex';
    }
}, 500);