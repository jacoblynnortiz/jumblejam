let mainVolume = document.getElementById('mainVolume');

let musicVolume = document.getElementById('musicVolume');
let soundEffectsVolume = document.getElementById('soundEffectsVolume');

let defaultSettings = [
    {
        "volume": {
            "master": 100,
            "music": 50,
            "soundFX": 50,
        },
        "background": "#333"
    }
];

let userSettings;

let backgrounds = [
    {
        "solid": ["#ff0000", "#00ff00", "#0000ff", "#333", "#fff"],
        "linear": [
            "linear-gradient(to bottom, blue, red)",
            "linear-gradient(to bottom, red, orange)",
            "linear-gradient(to bottom, pink, purple)",
            "linear-gradient(to bottom, purple, navy)",
        ],
        "radial": [
            "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 49%, rgba(0,212,255,1) 100%)",
            "radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
            "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
            "radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
        ],
    }
];

// loads all available backgrounds

let solidBackgrounds = document.getElementById('solidBackgrounds');
let linearBackgrounds = document.getElementById('linearBackgrounds');
let radialBackgrounds = document.getElementById('radialBackgrounds');

for (let i = 0; i < backgrounds[0].solid.length; i++) {
    let backgroundOption = document.createElement('button');
    let backgroundActiveContainer = document.createElement('div');
    let backgroundActiveIcon = document.createElement('i');

    backgroundOption.classList.add('background');

    backgroundOption.style.background = backgrounds[0].solid[i];

    backgroundOption.setAttribute('onclick', 'changeBackgroundSolid(' + i + ');');

    backgroundOption.id = 'backgroundSolid' + i;

    backgroundActiveContainer.classList.add('active-indicator');
    backgroundActiveIcon.classList.add('fa-solid');
    backgroundActiveIcon.classList.add('fa-check');

    backgroundActiveContainer.appendChild(backgroundActiveIcon);
    backgroundOption.appendChild(backgroundActiveContainer);
    solidBackgrounds.appendChild(backgroundOption);
}

for (let i = 0; i < backgrounds[0].linear.length; i++) {
    let backgroundOption = document.createElement('button');
    let backgroundActiveContainer = document.createElement('div');
    let backgroundActiveIcon = document.createElement('i');

    backgroundOption.classList.add('background');

    backgroundOption.style.background = backgrounds[0].linear[i];

    backgroundOption.setAttribute('onclick', 'changeBackgroundLinear(' + i + ');');

    backgroundOption.id = 'backgroundLinear' + i;

    backgroundActiveContainer.classList.add('active-indicator');
    backgroundActiveIcon.classList.add('fa-solid');
    backgroundActiveIcon.classList.add('fa-check');

    backgroundActiveContainer.appendChild(backgroundActiveIcon);
    backgroundOption.appendChild(backgroundActiveContainer);
    linearBackgrounds.appendChild(backgroundOption);
}

for (let i = 0; i < backgrounds[0].radial.length; i++) {
    let backgroundOption = document.createElement('button');
    let backgroundActiveContainer = document.createElement('div');
    let backgroundActiveIcon = document.createElement('i');

    backgroundOption.classList.add('background');

    backgroundOption.style.background = backgrounds[0].radial[i];

    backgroundOption.setAttribute('onclick', 'changeBackgroundRadial(' + i + ');');

    backgroundOption.id = 'backgroundRadial' + i;

    backgroundActiveContainer.classList.add('active-indicator');
    backgroundActiveIcon.classList.add('fa-solid');
    backgroundActiveIcon.classList.add('fa-check');

    backgroundActiveContainer.appendChild(backgroundActiveIcon);
    backgroundOption.appendChild(backgroundActiveContainer);
    radialBackgrounds.appendChild(backgroundOption);
}

// loads users perferred settings

if (localStorage.getItem('settings') == null) {
    let defaultSettingsString = JSON.stringify(defaultSettings);

    localStorage.setItem("settings", defaultSettingsString);

    let userSettingsString = localStorage.getItem('settings');

    userSettings = JSON.parse(userSettingsString);
} else {
    let userSettingsString = localStorage.getItem('settings');

    userSettings = JSON.parse(userSettingsString);

    mainVolume.value = userSettings[0].volume.master;
    musicVolume.value = userSettings[0].volume.music;
    soundEffectsVolume.value = userSettings[0].volume.soundFX;
}

// hides current unlocked content

let contentBlockSolidBG = document.getElementById('contentBlockSolidBG');
let contentBlockLinearBG = document.getElementById('contentBlockLinearBG');
let contentBlockRadialBG = document.getElementById('contentBlockRadialBG');

let requiredLevels = [
    {
        "solidBackgrounds": 5,
        "linearBackgrounds": 10,
        "radialBackgrounds": 15
    }
];

function unlockContent() {
    if (userLevel[0].levelName >= requiredLevels[0].solidBackgrounds) {
        contentBlockSolidBG.style.display = 'none';
    } else { contentBlockSolidBG.style.display = 'flex'; }
    
    if (userLevel[0].levelName >= requiredLevels[0].linearBackgrounds) {
        contentBlockLinearBG.style.display = 'none';
    } else { contentBlockLinearBG.style.display = 'flex'; }

    if (userLevel[0].levelName >= requiredLevels[0].radialBackgrounds) {
        contentBlockRadialBG.style.display = 'none';
    } else { contentBlockRadialBG.style.display = 'flex'; }
}

// sets perferred background to active background
game.style.background = userSettings[0].background;

let perferredBackgroundIndex;

for (let i = 0; i < backgrounds[0].solid.length; i++) {
    if(backgrounds[0].solid[i] == userSettings[0].background) {
        perferredBackgroundIndex = i;
    }
}

for (let i = 0; i < backgrounds[0].linear.length; i++) {
    if(backgrounds[0].linear[i] == userSettings[0].background) {
        perferredBackgroundIndex = i;
    }
}

for (let i = 0; i < backgrounds[0].radial.length; i++) {
    if(backgrounds[0].radial[i] == userSettings[0].background) {
        perferredBackgroundIndex = i;
    }
}

let firstLetterOfColor = userSettings[0].background.split("");

// this indicates the perferred color is solid
if(firstLetterOfColor[0] == '#')
    document.getElementById('backgroundSolid' + perferredBackgroundIndex).children[0].classList.add('active');

// this indicates the perferred color is linear
if(firstLetterOfColor[0] == 'l')
    document.getElementById('backgroundLinear' + perferredBackgroundIndex).children[0].classList.add('active');

// this indicates the perferred color is radial
if(firstLetterOfColor[0] == 'r')
    document.getElementById('backgroundRadial' + perferredBackgroundIndex).children[0].classList.add('active');


function updateSettings() {

    if (mainVolume.value != userSettings[0].volume.master) {
        userSettings[0].volume.master = mainVolume.value;
    }
    if (musicVolume.value != userSettings[0].volume.music) {
        userSettings[0].volume.music = musicVolume.value;
    }
    if (soundEffectsVolume.value != userSettings[0].volume.soundFX) {
        userSettings[0].volume.soundFX = soundEffectsVolume.value;
    }

    let userSettingsString = JSON.stringify(userSettings);

    localStorage.setItem("settings", userSettingsString);

    setSoundEffectsVolume();

    themeSong.volume = musicVolume.value / 100;

    setMainVolume();
}

function setMainVolume() {
    themeSong.volume = musicVolume.value / 100 * mainVolume.value / 100;
    dead.volume = soundEffectsVolume.value / 100 * mainVolume.value / 100;
    dying.volume = soundEffectsVolume.value / 100 * mainVolume.value / 100;
    correctSound.volume = soundEffectsVolume.value / 100 * mainVolume.value / 100;
    incorrectSound.volume = soundEffectsVolume.value / 100 * mainVolume.value / 100;
    levelUp.volume = soundEffectsVolume.value / 100 * mainVolume.value / 100;
}

function setSoundEffectsVolume() {
    dead.volume = soundEffectsVolume.value / 100;
    dying.volume = soundEffectsVolume.value / 100;
    correctSound.volume = soundEffectsVolume.value / 100;
    incorrectSound.volume = soundEffectsVolume.value / 100;
    levelUp.volume = soundEffectsVolume.value / 100;
}

function changeBackgroundSolid(i) {
    let game = document.getElementById('game');

    game.style.background = backgrounds[0].solid[i];

    userSettings[0].background = backgrounds[0].solid[i];

    let activeBackground = document.getElementById('backgroundSolid' + i);

    let allSolidBackgrounds = solidBackgrounds.querySelectorAll("div");
    let allLinearBackgrounds = linearBackgrounds.querySelectorAll("div");
    let allRadialBackgrounds = radialBackgrounds.querySelectorAll("div");

    for (let bg = 0; bg < allSolidBackgrounds.length; bg++) {
        allSolidBackgrounds[bg].classList.remove('active');
    }

    for (let bg = 0; bg < allLinearBackgrounds.length; bg++) {
        allLinearBackgrounds[bg].classList.remove('active');
    }

    for (let bg = 0; bg < allRadialBackgrounds.length; bg++) {
        allRadialBackgrounds[bg].classList.remove('active');
    }

    activeBackground.children[0].classList.add('active');
}

function changeBackgroundLinear(i) {
    let game = document.getElementById('game');

    game.style.background = backgrounds[0].linear[i];

    userSettings[0].background = backgrounds[0].linear[i];

    let activeBackground = document.getElementById('backgroundLinear' + i);

    let allSolidBackgrounds = solidBackgrounds.querySelectorAll("div");
    let allLinearBackgrounds = linearBackgrounds.querySelectorAll("div");
    let allRadialBackgrounds = radialBackgrounds.querySelectorAll("div");

    for (let bg = 0; bg < allSolidBackgrounds.length; bg++) {
        allSolidBackgrounds[bg].classList.remove('active');
    }

    for (let bg = 0; bg < allLinearBackgrounds.length; bg++) {
        allLinearBackgrounds[bg].classList.remove('active');
    }

    for (let bg = 0; bg < allRadialBackgrounds.length; bg++) {
        allRadialBackgrounds[bg].classList.remove('active');
    }

    activeBackground.children[0].classList.add('active');
}

function changeBackgroundRadial(i) {
    let game = document.getElementById('game');

    game.style.background = backgrounds[0].radial[i];

    userSettings[0].background = backgrounds[0].radial[i];

    let activeBackground = document.getElementById('backgroundRadial' + i);

    let allSolidBackgrounds = solidBackgrounds.querySelectorAll("div");
    let allLinearBackgrounds = linearBackgrounds.querySelectorAll("div");
    let allRadialBackgrounds = radialBackgrounds.querySelectorAll("div");

    for (let bg = 0; bg < allSolidBackgrounds.length; bg++) {
        allSolidBackgrounds[bg].classList.remove('active');
    }

    for (let bg = 0; bg < allLinearBackgrounds.length; bg++) {
        allLinearBackgrounds[bg].classList.remove('active');
    }

    for (let bg = 0; bg < allRadialBackgrounds.length; bg++) {
        allRadialBackgrounds[bg].classList.remove('active');
    }

    activeBackground.children[0].classList.add('active');
}