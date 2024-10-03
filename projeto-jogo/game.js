const escolhas = ["pedra", "papel", "tesoura"];
const jogadorDisplay = document.getElementById("jogadorScore");
const ComputadorDisplay = document.getElementById("computadorScore");
const resultado = document.getElementById("resultado");
const jogadorScoreDisplay = document.getElementById("jogadorScoreDisplay");
const computadorScoreDisplay = document.getElementById("computadorScoreDisplay");

let jogadorScore = 0;
let computadorScore = 0;

function jogar(escolhaJogador){
  const escolhaComputador = escolhas[Math.floor(Math.random() * 3)];
  console.log(escolhaComputador);

  let result = "";
  if (escolhaComputador ===  escolhaJogador) {
    result = "EMPATE"
  } else {
    switch(escolhaJogador) {
      case "pedra":
        result = (escolhaComputador === "tesoura") ? "VOCÊ GANHOU!" : "VOCÊ PERDEU!";
        break;
      case "papel":
        result = (escolhaComputador === "pedra") ? "VOCÊ GANHOU!" :  "VOCÊ PERDEU!";
        break; 
      case "tesoura":
        result = (escolhaComputador === "papel") ? "VOCÊ GANHOU!" :  "VOCÊ PERDEU!";
        break;
    }
  }
  jogadorDisplay.textContent = `Jogador: ${escolhaJogador}`;
  ComputadorDisplay.textContent = `Computador: ${escolhaComputador}`;
  resultado.textContent = result;

  resultado.classList.remove("greenText", "redText");

  switch(result) {
    case "VOCÊ GANHOU!":
      resultado.classList.add("greenText");
      jogadorScore++;
      jogadorScoreDisplay.textContent = jogadorScore;
      break;
    case "VOCÊ PERDEU!":
      resultado.classList.add("redText");
      computadorScore++;
      computadorScoreDisplay.textContent = computadorScore;
      break;
  }
  
}