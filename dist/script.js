// Access the buttons and points
const options = document.querySelectorAll(".options button");
const playerImg = document.querySelector(".player img");
const computerImg = document.querySelector(".computer img");
const playerPointsEl = document.querySelector(".playerPoints");
const computerPointsEl = document.querySelector(".computerPoints");
const message = document.querySelector(".message");

let playerPoints = 0;
let computerPoints = 0;

const choices = ["STONE", "PAPER", "SCISSORS"];

function playRound(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  playerImg.src = "../gameImages/" + playerChoice.toLowerCase() + "Player.png";
  computerImg.src = "../gameImages/" + computerChoice.toLowerCase() + "Computer.png";

  if (playerChoice === computerChoice) {
    message.textContent = "DRAW!";
  } else if (
    (playerChoice === "STONE" && computerChoice === "SCISSORS") ||
    (playerChoice === "PAPER" && computerChoice === "STONE") ||
    (playerChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    playerPoints++;
    playerPointsEl.textContent = playerPoints;
    message.textContent = "YOU WIN!";
  } else {
    computerPoints++;
    computerPointsEl.textContent = computerPoints;
    message.textContent = "YOU LOSE!";
  }
}

// Button click handlers
options.forEach(button => {
  button.addEventListener("click", () => {
    computerImg.classList.add("shakeComputer");
    playerImg.classList.add("shakePlayer");
    const playerChoice = button.textContent;
    if (choices.includes(playerChoice)) {
      setTimeout(() => {
        computerImg.classList.remove("shakeComputer");
        playerImg.classList.remove("shakePlayer");
        playRound(playerChoice);
      }, 900);
    }
  });
});