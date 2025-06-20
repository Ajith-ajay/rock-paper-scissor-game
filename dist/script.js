// const computer = document.querySelector(".computer img");
// const player = document.querySelector(".player img");
// const computerPoints = document.querySelector(".computerPoints");
// const playerPoints = document.querySelector(".playerPoints");
// const options = document.querySelectorAll(".options button");

// options.forEach((option) => {
//   option.addEventListener("click", () => {
//     computer.classList.add("shakeComputer");
//     player.classList.add("shakePlayer");

//     setTimeout(() => {
//       computer.classList.remove("shakeComputer");
//       player.classList.remove("shakePlayer");

//       player.src = "../gameImages/" + option.innerHTML.toLowerCase() + "Player.png";
      

//       const choice = ["STONE", "PAPER", "SCISSORS"];
//       let arrayNo = Math.floor(Math.random() * 3);
//       let computerChoice = choice[arrayNo];
//       computer.src = "../gameImages/" + computerChoice.toLowerCase() + "Computer.png";

//       let cPoints = parseInt(computerPoints.innerHTML);
//       let pPoints = parseInt(playerPoints.innerHTML);

//       if (option.innerHTML === "STONE") {
//         if (computerChoice === "PAPER")
//           computerPoints.innerHTML = cPoints + 1;
//         else if (computerChoice === "SCISSORS")
//           playerPoints.innerHTML = pPoints + 1;
//       } else if (option.innerHTML === "PAPER") {
//         if (computerChoice === "SCISSORS")
//           computerPoints.innerHTML = cPoints + 1;
//         else if (computerChoice === "STONE")
//           playerPoints.innerHTML = pPoints + 1;
//       } else {
//         if (computerChoice === "STONE")
//           computerPoints.innerHTML = cPoints + 1;
//         else if (computerChoice === "PAPER")
//           playerPoints.innerHTML = pPoints + 1;
//       }
//     }, 900);
//   });
// });

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
const imageMap = {
  STONE: "../gameImages/stone.png",
  PAPER: "../gameImages/paper.png",
  SCISSORS: "../gameImages/scissors.png"
};

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