let words;
let chosenWord;
let currentScore = 0;
let currentHighScore;
let timerCounter;
let loop;

let defaultTimer = 60;
let timer = defaultTimer;

let gameRunning = false;

let gameOver = document.getElementById('gameOver');
let totalScore = document.getElementById('totalScore');

// sets all the sound effects

let correctSound = new Audio('res/sounds/correct.mp3');
let incorrectSound = new Audio('res/sounds/incorrect.mp3');
let dying = new Audio('res/sounds/dying.mp3');
let dead = new Audio('res/sounds/dead.mp3');

// sets the theme song

let themeSong = new Audio('res/sounds/themeSong.wav');

themeSong.addEventListener('ended', function() {
    themeSong.currentTime = 0;
    themeSong.play();
});

themeSong.play();

let highScore = document.getElementById('highScore');

let wordContainer = document.getElementById('wordContainer');

let timerContainer = document.getElementById('timer');

highScore.innerText = localStorage.getItem('highScore');

if (localStorage.getItem('highScore') == null) {
    localStorage.setItem('highScore', 0);
    currentHighScore = localStorage.getItem('highScore');
    highScore.innerText = currentHighScore;
} else {
    currentHighScore = localStorage.getItem('highScore');
    highScore.innerText = currentHighScore;
}

function startGame() {
    gameRunning = true;
    timer = defaultTimer;
    currentScore = 0;

    themeSong.play();

    gameOver.classList.add('hidden');
    clearInterval(loop);
    clearInterval(timerCounter);

    loop = setInterval(gameLoop, 500);

    pickWord();
    setTimer();
}

function pickWord() {

    $.getJSON('app/js/words.json', function (response) {
        words = response;

        // this loops through to find out how many words are available

        let wordsAvailable;

        for (let i = 0; i < words.length; i++) {
            wordsAvailable = i;
        }

        let randWordIndex = Math.floor(Math.random() * wordsAvailable);

        let chosenWordRaw = words[randWordIndex];
        chosenWord = chosenWordRaw.toUpperCase(1);

        setWord(chosenWord);
    });
}

// this function shuffles the letters to make the game cool

function shuffleLetters(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function setWord(chosenWord) {
    let letters = chosenWord.split("");

    shuffleLetters(letters);

    wordContainer.innerHTML = '';

    // creates all the letters seperately and scrambles them

    for (let i = 0; i < letters.length; i++) {
        let letter = document.createElement('span');

        letter.innerText = letters[i];
        
        wordContainer.appendChild(letter);
    }
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

        dying.play();

        timerContainer.parentElement.classList.add('times-up');

        timerContainer.innerText = timer + 's';
    } else {
        timer--;

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

            totalScore.innerText = currentScore;
        }
    }
}