function pickWord() {

    UnscrambledWord.value = '';
    UnscrambledWord.focus();

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