function pickNewWord() {

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

        setNewWord(chosenWord);
    });
}

// this function shuffles the letters to make the game cool

function shuffleNewLetters(array) {
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

function setNewWord(chosenWord) {
    let letters = chosenWord.split("");

    shuffleNewLetters(letters);

    for (let i = 0; i < wordContainer.children.length; i++) {
        wordContainer.children[i].remove();
    }

    // creates all the letters seperately and scrambles them

    for (let i = 0; i < letters.length; i++) {
        let letter = document.createElement('span');

        letter.innerText = letters[i];
        
        wordContainer.appendChild(letter);
    }
}