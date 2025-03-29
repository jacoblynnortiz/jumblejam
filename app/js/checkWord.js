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
            
            alert('correct!');

            pickNewWord();
        } else {
            alert('wrong!');
        }
    } else {
        return;
    }
}