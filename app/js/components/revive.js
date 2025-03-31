function revivePlayer() {

    currentCoins = currentCoins - neededCoinsToRevive;

    coinsAmmount.innerText = currentCoins;

    if(currentCoins != localStorage.getItem('coins'))
        localStorage.setItem('coins', currentCoins);

    gameOver.classList.toggle('hidden');

    timer = defaultTimer;
    gameRunning = true;

    UnscrambledWord.disabled = false;
    checkBtn.disabled = false;
    refreshWord.disabled = false;
    timerBarWidth = 100;
    neededCoinsToRevive = neededCoinsToRevive * 2;

    pickWord();
}