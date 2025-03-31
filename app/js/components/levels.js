let levels = [
    {"levelName": 1, "requiredXP": 10},
    {"levelName": 2, "requiredXP": 25}, 
    {"levelName": 3, "requiredXP": 50}, 
    {"levelName": 4, "requiredXP": 100}, 
    {"levelName": 5, "requiredXP": 200}
]

let userDefaultLevel = [
    {"levelName": 1, "requiredXP": 10, "userLevelProgression": 0}
]

let userLevel;

let userLevelContainer = document.getElementById('userLevelContainer');
let progressBar = document.getElementById('progressBar');

if (localStorage.getItem('userLevel') == null) {
    let defaultUserLevelString = JSON.stringify(userDefaultLevel);

    localStorage.setItem("userLevel", defaultUserLevelString);

    let userLevelString = localStorage.getItem('userLevel');

    userLevel = JSON.parse(userLevelString);

    loadLevel();
} else {
    let userLevelString = localStorage.getItem('userLevel');

    userLevel = JSON.parse(userLevelString);

    loadLevel();
}

function loadLevel() {
    userLevelContainer.innerText = userLevel[0].levelName;

    setTimeout(() => {

        let progressJuice = userLevel[0].userLevelProgression / userLevel[0].requiredXP * 100;

        progressBar.style.width = progressJuice + '%';
    }, 200);

    // save users level name and progression

    let updatedLevelInfoString = JSON.stringify(userLevel);

    localStorage.setItem("userLevel", updatedLevelInfoString);
}

setInterval(() => {
    loadLevel();
    unlockContent();
}, 500)

function addXP() {
    let levelTotalXP = userLevel[0].requiredXP;
    let levelName  = userLevel[0].levelName;
    let userLevelProgress = userLevel[0].userLevelProgression;

    generateXP(generatedXP);

    userLevel[0].userLevelProgression = userLevelProgress + generatedXP;
    userLevelProgress = userLevel[0].userLevelProgression;

    if(userLevelProgress >= levelTotalXP) {

        let remaingXP = userLevelProgress - userLevel[0].requiredXP;

        userLevel[0].levelName = levels[levelName++].levelName;
        userLevel[0].requiredXP = levels[levelName++].requiredXP;
        userLevel[0].userLevelProgression = remaingXP;

        levelUp.play();
    }
}