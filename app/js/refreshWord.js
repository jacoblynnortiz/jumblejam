let refreshWord = document.getElementById('refreshWord');

refreshWord.addEventListener('click', refresh);

function refresh() {

    currentScore = currentScore - 5;

    pickWord();
}