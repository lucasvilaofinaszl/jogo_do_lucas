let timeLeft = 10; // Tempo inicial em segundos
let score = 0; // Pontuação do jogador

const timeLeftElement = document.getElementById("time-left");
const scoreElement = document.getElementById("score");
const clickButton = document.getElementById("clickButton");

// Função para atualizar o timer
function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeLeftElement.textContent = timeLeft;
    } else {
        // Fim do jogo
        clearInterval(timerInterval);
        clickButton.disabled = true;
        clickButton.textContent = "Tempo esgotado! Clique aqui para reiniciar";
    }
}

// Função para registrar o clique
clickButton.addEventListener("click", function() {
    if (timeLeft > 0) {
        score++;
        scoreElement.textContent = "Pontuação: " + score;
    } else {
        // Reiniciar o jogo
        timeLeft = 10;
        score = 0;
        scoreElement.textContent = "Pontuação: 0";
        clickButton.disabled = false;
        clickButton.textContent = "Clique Aqui!";
        timeLeftElement.textContent = timeLeft;
        timerInterval = setInterval(updateTimer, 1000); // Reinicia o timer
    }
});

// Iniciar o timer quando o jogo começa
let timerInterval = setInterval(updateTimer, 1000);

