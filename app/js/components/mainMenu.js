let mainMenu = document.getElementById('mainMenu');

mainMenu.innerHTML = `
    <div class="main-menu-content-wrapper">
        <video autoplay muted loop>
            <source src="https://static.vecteezy.com/system/resources/previews/002/019/328/mp4/a-scrolling-screen-text-and-alien-letters-free-video.mp4">
            Your browser does not support the video tag.
        </video>
        <div class="main-menu-content">
            <h2>JUMBLE JAM</h2>
            <div class="menu-btns">
                <button title="Play" class="system-button" name="play" id="playBtn">Play</button>
                <button title="Settings" class="system-button" name="settings" id="settingsBtn">Settings</button>
                <button title="Quit" class="system-button" id="quitBtn" name="quit">Quit</button>
            </div>
        </div>
    </div>
`;