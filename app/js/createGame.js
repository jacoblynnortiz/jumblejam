let words;
let chosenWord;
let currentScore = 0;
let currentHighScore;
let currentCoins;
let timerCounter;
let timerBarWidth;
let loop;

let defaultTimer = 60;
let timer = defaultTimer;

let gameRunning = false;
let gamePaused = false;

let defaultCoinsAmount = 0;

let coinsAmmount = document.getElementById('coinsAmmount');

currentCoins = defaultCoinsAmount;
coinsAmmount.innerText = currentCoins;

let totalScore = document.getElementById('totalScore');

// sets all the sound effects

let correctSound = new Audio('res/sounds/correct.mp3');
let incorrectSound = new Audio('res/sounds/incorrect.mp3');
let levelUp = new Audio('res/sounds/levelUp.mp3');
let dying = new Audio('res/sounds/dying.mp3');
let dead = new Audio('res/sounds/dead.mp3');

// sets the theme song

let themeSong = new Audio('res/sounds/themeSong.wav');

themeSong.addEventListener('ended', function() {
    themeSong.currentTime = 0;
    themeSong.play();
});

document.addEventListener('click', () => {
    themeSong.play()
      .then(() => {
        // Audio started playing successfully
      })
      .catch(error => {
        console.error('Failed to play audio:', error);
        // Handle the error appropriately, e.g., display a message to the user
      });
  }, { once: true }); // Ensures the event listener is only triggered once

let highScore = document.getElementById('highScore');

let wordContainer = document.getElementById('wordContainer');

let timerContainer = document.getElementById('timer');
let timerBar = document.getElementById('timerBar');

highScore.innerText = localStorage.getItem('highScore');

if (localStorage.getItem('highScore') == null) {
    localStorage.setItem('highScore', 0);
    currentHighScore = localStorage.getItem('highScore');
    highScore.innerText = currentHighScore;
} else {
    currentHighScore = localStorage.getItem('highScore');
    highScore.innerText = currentHighScore;
}

if (localStorage.getItem('coins') == null) {
    localStorage.setItem('coins', 0);
    currentCoins = localStorage.getItem('coins');
    coinsAmmount.innerText = currentCoins;
} else {
    currentCoins = localStorage.getItem('coins');
    coinsAmmount.innerText = currentCoins;
}

function startGame() {
    gameRunning = true;
    timer = defaultTimer;
    currentScore = 0;
    UnscrambledWord.disabled = false;
    checkBtn.disabled = false;
    refreshWord.disabled = false;
    timerBarWidth = 100;

    gameOver.classList.add('hidden');
    clearInterval(loop);
    clearInterval(timerCounter);

    loop = setInterval(gameLoop, 500);

    pickWord();
    setTimer();
}

function setTimer() {
    timerCounter = setInterval(createTimer, 1000);
}

function createTimer() {

    if(gameRunning == false)
        return;

    if(timer <= 0) {
        gameRunning = false;

        dying.pause();
        dead.play();

    } else if(timer <= 10) {
        timer--;
        timerBarWidth = timerBarWidth - 1.66666667;
        timerBar.style.width = timerBarWidth + '%';

        dying.play();

        timerContainer.parentElement.classList.add('times-up');

        timerContainer.innerText = timer + 's';
    } else {
        timer--;
        timerBarWidth = timerBarWidth - 1.66666667;
        timerBar.style.width = timerBarWidth + '%';

        dying.pause();

        timerContainer.parentElement.classList.remove('times-up');

        if(timer <= 0) {
            timerContainer.parentElement.classList.add('times-up');
            dead.play();
        }

        timerContainer.innerText = timer + 's';
    }
}

function gameLoop() {
    if(gameRunning) {
        update();
    } else {
        if(!gameOver.matches('.hidden')) {
            return;
        }else {
            gameOver.classList.toggle('hidden');

            UnscrambledWord.value = '';
            UnscrambledWord.disabled = true;
            checkBtn.disabled = true;
            refreshWord.disabled = true;

            totalScore.innerText = currentScore;

            calculateEarnedCoins();

            coinsAmmount.innerText = currentCoins;

            if(currentCoins != localStorage.getItem('coins'))
                localStorage.setItem('coins', currentCoins);
        }
    }
}

function update() {
    updateScore();
}

function calculateEarnedCoins() {
    let newCoin = Math.floor(currentScore / 500);

    if(newCoin < 0)
        newCoin = 0;

    currentCoins = parseInt(currentCoins) + parseInt(newCoin);
}