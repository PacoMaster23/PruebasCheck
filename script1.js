const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const spinBtn = document.getElementById('spinBtn');
const results = document.getElementById('results');

const symbols = ['🍒', '🍋', '🍊', '🍇', '🍉', '🍎', '🍍', '🥝', '🍓'];

function spinReel() {
  const index = Math.floor(Math.random() * symbols.length);
  return symbols[index];
}

function spin() {
  reel1.textContent = spinReel();
  reel2.textContent = spinReel();
  reel3.textContent = spinReel();

  checkResults();
}

function checkResults() {
  const combination = reel1.textContent + reel2.textContent + reel3.textContent;
  const winningCombinations = ['🍒🍒🍒', '🍋🍋🍋', '🍊🍊🍊'];

  if (winningCombinations.includes(combination)) {
    results.textContent = '¡Felicidades! ¡Has ganado!';
  } else {
    results.textContent = '¡Inténtalo de nuevo!';
  }
}

spinBtn.addEventListener('click', spin);
