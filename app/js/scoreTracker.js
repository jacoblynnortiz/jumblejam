let scoreContainer = document.getElementById('score');

function updateScore() {
    scoreContainer.innerText = currentScore;

    currentHighScore = Number(currentHighScore)

    if (currentScore >= currentHighScore) {
        currentHighScore = currentScore;
        highScore.innerText = currentHighScore;
        localStorage.setItem('highScore', currentHighScore)
    }
}