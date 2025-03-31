let settingsMenu = document.getElementById('settingsMenu');

settingsMenu.innerHTML = `
    <button title="Main Menu" name="back to main menu" id="closeSettings" class="close-settings"><i class="fa-solid fa-arrow-left"></i></button>
        <h2>Settings</h2>
        <div class="settings-options-container">
            <div class="settings-options">
                <h3>Volume</h3>
                <div class="settings-category">
                    <div class="settings-option">
                        <label for="mainVolume">Master</label>
                        <input type="range" id="mainVolume" name="volume" min="0" max="100" value="50">
                    </div>
                    <div class="settings-option">
                        <label for="musicVolume">Music</label>
                        <input type="range" id="musicVolume" name="volume" min="0" max="100" value="50">
                    </div>
                    <div class="settings-option">
                        <label for="soundEffectsVolume">Sound Effects</label>
                        <input type="range" id="soundEffectsVolume" name="volume" min="0" max="100" value="50">
                    </div>
                </div>
                <h3>Background</h3>
                <div class="settings-category">
                    <h4>Solid</h4>
                    <div class="background-category" id="solidBackgrounds"></div>
                    <h4>Linear</h4>
                    <div class="background-category" id="linearBackgrounds"></div>
                </div>
            </div>
        </div>
`;

let closeSettings = document.getElementById('closeSettings');