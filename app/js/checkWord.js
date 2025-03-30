let checkBtn = document.getElementById('CheckBtn');
let UnscrambledWord = document.getElementById('UnscrambledWord');

checkBtn.addEventListener('click', checkWord);

document.addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        checkWord();
    }
});

function checkWord() {
    if (UnscrambledWord.value != '') {
        let userChoice = UnscrambledWord.value.toUpperCase();
        if (userChoice == chosenWord) {
            UnscrambledWord.value = '';
            
            currentScore = currentScore + 100;

            correctSound.play();

            setTimeout(() => {
                timer = defaultTimer + 0;

                pickNewWord();
            }, 1500);
        } else {
            UnscrambledWord.value = '';

            incorrectSound.play();

            if (timer <= 10) {
                currentScore = currentScore - 20;
            } else {
                timer = timer - 10;
                currentScore = currentScore - 20;
            }

            timerContainer.parentElement.classList.add('times-up');

            setTimeout(() => {
                timerContainer.parentElement.classList.remove('times-up');
            }, 1500);
        }
    } else {
        return;
    }
}