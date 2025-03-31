let pausedMenu = document.getElementById('pausedMenu');

pausedMenu.innerHTML = `
    <h2>Paused</h2>
        <div class="menu-btns">
            <button title="Back to Game" class="system-button" name="back to game" id="returnPausedBtn">Back to Game</button>
            <button title="Settings" class="system-button" name="settings" id="settingsPausedBtn">Settings</button>
            <button title="Main Menu" class="system-button" name="main menu" id="mainMenuPausedBtn">Main Menu</button>
        </div>
`;