let xpAmmounts = [4, 5, 6];
let chooseXPAmmount;
let generatedXP;

let multiplier = 1;

function generateXP() {

    chooseXPAmmount = Math.floor(Math.random() * 3);

    generatedXP = xpAmmounts[chooseXPAmmount] * multiplier;
}