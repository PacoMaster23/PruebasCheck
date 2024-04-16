const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');

  const player = {
    x: canvas.width / 2,
    y: canvas.height - 50,
    width: 50,
    height: 50,
    speed: 5,
  };

  const bullets = [];
  const enemies = [];
  let score = 0;
  let gameOver = false;

  function drawPlayer() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x, player.y, player.width, player.height);
  }

  function drawBullets() {
    ctx.fillStyle = 'red';
    bullets.forEach(bullet => {
      ctx.fillRect(bullet.x, bullet.y, 5, 10);
    });
  }

  function drawEnemies() {
    ctx.fillStyle = 'green';
    enemies.forEach(enemy => {
      ctx.fillRect(enemy.x, enemy.y, 30, 30);
    });
  }

  function updateBullets() {
    bullets.forEach(bullet => {
      bullet.y -= 5;
    });
    bullets.forEach((bullet, index) => {
      if (bullet.y < 0) {
        bullets.splice(index, 1);
      }
    });
  }

  function updateEnemies() {
    enemies.forEach(enemy => {
      enemy.y += 2;
    });
    enemies.forEach((enemy, index) => {
      if (enemy.y > canvas.height) {
        enemies.splice(index, 1);
      }
      if (
        enemy.x < player.x + player.width &&
        enemy.x + 30 > player.x &&
        enemy.y < player.y + player.height &&
        enemy.y + 30 > player.y
      ) {
        gameOver = true;
      }
    });
  }

  function shoot() {
    bullets.push({ x: player.x + player.width / 2 - 2.5, y: player.y });
  }

  function spawnEnemy() {
    const x = Math.random() * (canvas.width - 30);
    enemies.push({ x: x, y: 0 });
  }

  function collisionDetection() {
    bullets.forEach((bullet, bulletIndex) => {
      enemies.forEach((enemy, enemyIndex) => {
        if (
          bullet.x < enemy.x + 30 &&
          bullet.x + 5 > enemy.x &&
          bullet.y < enemy.y + 30 &&
          bullet.y + 10 > enemy.y
        ) {
          bullets.splice(bulletIndex, 1);
          enemies.splice(enemyIndex, 1);
          score += 10;
        }
      });
    });
  }

  function drawScore() {
    ctx.fillStyle = 'black';
    ctx.font = '24px Arial';
    ctx.fillText('Score: ' + score, 10, 30);
  }

  function drawGameOver() {
    ctx.fillStyle = 'black';
    ctx.font = '48px Arial';
    ctx.fillText('Game Over', canvas.width / 2 - 150, canvas.height / 2);
  }

  function draw() {
    if (!gameOver) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPlayer();
      drawBullets();
      drawEnemies();
      updateBullets();
      updateEnemies();
      collisionDetection();
      drawScore();
    } else {
      drawGameOver();
    }
  }

  function keyDownHandler(e) {
    if (!gameOver) {
      if (e.key === 'ArrowLeft' && player.x > 0) {
        player.x -= player.speed;
      } else if (e.key === 'ArrowRight' && player.x < canvas.width - player.width) {
        player.x += player.speed;
      } else if (e.key === ' ') {
        shoot();
      }
    }
  }

  document.addEventListener('keydown', keyDownHandler);

  setInterval(draw, 16); // 60 fps
  setInterval(spawnEnemy, 1000); // Genera un enemigo cada segundo