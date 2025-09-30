let score = 0;
let target = document.getElementById("target");
let scoreDisplay = document.getElementById("score");

function randomPosition() {
  let maxWidth = window.innerWidth - target.offsetWidth;
  let maxHeight = window.innerHeight - target.offsetHeight;
  
  let randomX = Math.floor(Math.random() * maxWidth);
  let randomY = Math.floor(Math.random() * maxHeight);
  
  target.style.left = randomX + "px";
  target.style.top = randomY + "px";
}

function increaseScore() {
  score++;
  scoreDisplay.textContent = "Pontuação: " + score;
  randomPosition();
}

target.addEventListener("c
randomPosition();


