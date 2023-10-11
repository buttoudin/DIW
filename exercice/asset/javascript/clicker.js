// Initialisation des variables
let score = 0;
let autoClickerCost = 10; // Coût initial de l'autoclicker
let autoClickers = 0; // Nombre d'autoclickers

// Sélection des éléments HTML
const clickButton = document.getElementById('clickButton');
const scoreDisplay = document.getElementById('score');
const autoClickerCostDisplay = document.getElementById('autoClickerCost');
const buyAutoClickerButton = document.getElementById('buyAutoClicker');

// Fonction pour incrémenter le score
function incrementScore() {
    score++;
    scoreDisplay.textContent = score;
}

// Fonction pour acheter un autoclicker
function buyAutoClicker() {
    if (score >= autoClickerCost) {
        autoClickers++;
        score -= autoClickerCost;
        autoClickerCost += 5; // Augmentez le coût de l'autoclicker à chaque achat
        scoreDisplay.textContent = score;
        autoClickerCostDisplay.textContent = autoClickerCost;
    } else {
        alert("Vous n'avez pas assez de points pour acheter un autoclicker !");
    }
}

// Fonction pour automatiquement cliquer avec les autoclickers
function autoClick() {
    score += autoClickers;
    scoreDisplay.textContent = score;
}

// Écouteurs d'événements
clickButton.addEventListener('click', incrementScore);
buyAutoClickerButton.addEventListener('click', buyAutoClicker);

// Configuration de l'autoclicker pour cliquer automatiquement toutes les secondes
setInterval(autoClick, 1000);