let gameRunning = true;

setInterval(() => {
    if(gameRunning) {
        update();
    } else {
        console.log('GAME OVER!');
    }
}, 500);