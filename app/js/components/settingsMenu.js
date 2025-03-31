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
                    <div class="category-container">
                        <div id="contentBlockSolidBG" class="content-block" data-unlockrequirement="Reach Level 5 to unlock"><div class="lock"></div></div>
                        <h4>Solid</h4>
                        <div class="background-category" id="solidBackgrounds"></div>
                    </div>
                    <div class="category-container">
                        <div id="contentBlockLinearBG" class="content-block" data-unlockrequirement="Reach Level 10 to unlock"><div class="lock"></div></div>
                        <h4>Linear</h4>
                        <div class="background-category" id="linearBackgrounds"></div>
                    </div>
                    <div class="category-container">
                        <div id="contentBlockRadialBG" class="content-block" data-unlockrequirement="Reach Level 15 to unlock"><div class="lock"></div></div>
                        <h4>Radial</h4>
                        <div class="background-category" id="radialBackgrounds"></div>
                    </div>
                </div>
            </div>
        </div>
`;

let closeSettings = document.getElementById('closeSettings');