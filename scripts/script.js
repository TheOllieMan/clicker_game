let score = 0;
let totalScore = 0;
let cursorScore = 0;
let totalClicks = 0;
let clicksPerSecond = 0;
let cursorsOwned = 0;
let cursorCost = 10;

let upgradesOwned = 0;
let upgradeCost = 50;

let autoClickersOwned = 0;
let autoClickerCost = 100;
let autoClickerInterval;

function updateScore() {
    document.getElementById('score').innerText = score;
    document.getElementById('totalScore').innerText = totalScore;
    document.getElementById('totalCursorScore').innerText = cursorScore;
    document.getElementById('totalClicks').innerText = totalClicks;
    document.getElementById('clicksPerSecond').innerText =
        clicksPerSecond.toFixed(2);
    document.getElementById('cursorsOwned').innerText = cursorsOwned;
    document.getElementById('upgradesOwned').innerText = upgradesOwned;
    document.getElementById('autoClickersOwned').innerText = autoClickersOwned;

    document.getElementById('buyCursorBtn').disabled = score < cursorCost;
    document.getElementById('buyUpgradeBtn').disabled = score < upgradeCost;
    document.getElementById('buyAutoClickerBtn').disabled =
        score < autoClickerCost;
}

function clickMe() {
    score++;
    totalScore++;
    totalClicks++;
    updateScore();
}

function buyCursor() {
    if (score >= cursorCost) {
        score -= cursorCost;
        cursorScore += cursorCost;
        cursorsOwned++;
        cursorCost = Math.round(cursorCost * 1.15);
        updateScore();
    }
}

function buyUpgrade() {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        upgradeCost = Math.round(upgradeCost * 1.2);
        upgradesOwned++;
        // Add functionality for the upgrade (e.g., increase click value)
        // Here, we'll increase the click value by 2 for demonstration purposes
        score += 2;
        updateScore();
    }
}

function buyAutoClicker() {
    if (score >= autoClickerCost) {
        score -= autoClickerCost;
        autoClickerCost = Math.round(autoClickerCost * 1.2);
        autoClickersOwned++;
        autoClickerInterval = setInterval(function () {
            clickMe();
        }, 1000);
        updateScore();
    }
}

setInterval(function () {
    clicksPerSecond = totalClicks / 10;
}, 1000);

setInterval(function () {
    updateCursors();
}, 10000);

function updateCursors() {
    score += cursorsOwned;
    totalScore += cursorsOwned;
    cursorScore += cursorsOwned;
    updateScore();
}