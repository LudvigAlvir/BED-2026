const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const WIDTH = canvas.width;
const HEIGHT = canvas.height;
console.log(Math.floor(Math.random() * 2)); // either 0 or 1
/* const sprite = new Image(50, 50);
sprite.src = "./bird.png"; */

const player = {
  x: 225,
  y: 225,
  w: 50,
  h: 50,
  speed: -10,
  color: "green",
  getPosition: function () {
    return {
      x: this.x,
      y: this.y,
    };
  },
  move: function () {
    this.y += this.speed;
    this.speed += 0.5;
  },
  jump: function () {
    this.speed = -10;
  },
  draw: function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    /* ctx.drawImage(sprite, this.x, this.y, this.w, this.h); */
  },
  reset: function () {
    this.y = 225;
    this.speed = -10;
  },
};

const obstacle = {
  x: 450,
  y: -100,
  w: 50,
  h: 400,
  color: "purple",
  move: function () {
    this.x = this.x - 2;
  },
  draw: function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  },
  reset: function () {
    this.x = WIDTH;
    const random = Math.floor(Math.random() * 2); // 0 or 1
    if (random == 0) {
      this.y = 0;
      const height = Math.random() * 250 + 100;
      this.h = height;
    } else if (random == 1) {
      const y = Math.random() * 250 + 150;
      this.y = y;
      this.h = 350;
    }
  },
};
function resetGame() {
  player.reset();
  obstacle.reset();
}

function checkBounds() {
  if (player.y + player.h >= HEIGHT || player.y <= 0) {
    alert("You died");
    resetGame();
  }
  if (obstacle.x + obstacle.w < 0) {
    obstacle.reset();
  }

  if (
    player.x + player.w > obstacle.x &&
    player.x < obstacle.x + obstacle.w &&
    player.y + player.h > obstacle.y &&
    player.y < obstacle.y + obstacle.h
  ) {
    alert("You died");
    resetGame();
  }
}
function moveElements() {
  player.move();
  obstacle.move();
}
function clearCanvas() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}
function drawElements() {
  player.draw();
  obstacle.draw();
}

function gameLoop() {
  clearCanvas();
  checkBounds();
  moveElements();
  drawElements();
}
ctx.fillRect(player.x, player.y, player.w, player.h);

setInterval(gameLoop, 30);

window.addEventListener("keydown", (e) => {
  if (e.key == " ") {
    player.jump();
  }
});
