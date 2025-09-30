let score = 0;
let target = document.getElementById("target");
let scoreDisplay = document.getElementById("score");

// Função para atualizar a posição da caixa
function randomPosition() {
  let maxWidth = window.innerWidth - target.offsetWidth;
  let maxHeight = window.innerHeight - target.offsetHeight;
  
  let randomX = Math.floor(Math.random() * maxWidth);
  let randomY = Math.floor(Math.random() * maxHeight);
  
  target.style.left = randomX + "px";
  target.style.top = randomY + "px";
}

// Função para aumentar a pontuação
function increaseScore() {
  score++;
  scoreDisplay.textContent = "Pontuação: " + score;
  randomPosition();
}

// Adiciona o evento de clique na caixa
target.addEventListener("click", increaseScore);

// Inicializa a posição da caixa
randomPosition();


