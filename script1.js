const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const spinBtn = document.getElementById('spinBtn');
const results = document.getElementById('results');
const pointsDisplay = document.getElementById('points');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');

const symbols = ['🍒', '🍋', '🍊', '🍇', '🍉', '🍎', '🍍', '🥝', '🍓'];

let points = 0;
let wins = 0;
let losses = 0;

function spinReel() {
  const index = Math.floor(Math.random() * symbols.length);
  return symbols[index];
}

function spin() {
  const result1 = spinReel();
  const result2 = spinReel();
  const result3 = spinReel();

  reel1.textContent = result1;
  reel2.textContent = result2;
  reel3.textContent = result3;

  if (result1 === result2 && result2 === result3) {
    points += 50; // Puntos si se obtienen tres símbolos iguales
    wins++;
    results.textContent = '¡Ganaste!';
  } else {
    points--;
    losses++;
    results.textContent = 'Perdiste.';
  }

  updateScores();
}

function updateScores() {
  pointsDisplay.textContent = points;
  winsDisplay.textContent = wins;
  lossesDisplay.textContent = losses;
}

spinBtn.addEventListener('click', spin);
