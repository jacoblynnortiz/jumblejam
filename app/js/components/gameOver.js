let gameOver = document.getElementById('gameOver');

gameOver.innerHTML = `
        <h2>GAME OVER</h2>
        <h3>Score: <span id="totalScore"></span></h3>
        <button title="Restart" class="system-button" name="restart" id="restartBtn">Restart</button>
        <button title="Main Menu" class="system-button" name="main menu" id="mainMenuBtn">Main Menu</button>
`;