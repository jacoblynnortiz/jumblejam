let words;

let wordContainer = document.getElementById('wordContainer');

let timerContainer = document.getElementById('timer');

pickWord();
setTimer();

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
        let chosenWord = chosenWordRaw.toUpperCase(1);

        setWord(chosenWord);
    });
}

function setWord(chosenWord) {
    const letters = chosenWord.split("");

    // creates all the letters seperately and scrambles them

    for (let i = 0; i < letters.length; i++) {
        let letter = document.createElement('span');

        letter.innerText = letters[i];
        
        wordContainer.appendChild(letter);
    }
}

function setTimer() {
    let timer = 60;

    setInterval(() => {
        if(timer <= 0) {
            gameRunning = false;
        } else {
            timer--;

            if(timer <= 0)
                timerContainer.parentElement.classList.add('times-up');

            timerContainer.innerText = timer + 's';
        }
    }, 1000);
}