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

// 🎤 Voice Assistant Integration
const voiceBtn = document.getElementById("voiceBtn");

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.continuous = false;

  voiceBtn.addEventListener('click', () => {
    message.textContent = "Listening... Speak Stone, Paper, or Scissors.";
    recognition.start();
  });

  recognition.onresult = (event) => {
    const speech = event.results[0][0].transcript.toUpperCase().trim();
    console.log("Recognized:", speech);
    const matched = choices.find(choice => speech.includes(choice));
    if (matched) {
      computerImg.classList.add("shakeComputer");
      playerImg.classList.add("shakePlayer");
      setTimeout(() => {
        computerImg.classList.remove("shakeComputer");
        playerImg.classList.remove("shakePlayer");
        playRound(matched);
      }, 900);
      // playRound(matched);
    } else {
      message.textContent = "Couldn't recognize. Try saying Stone, Paper, or Scissors.";
    }
  };

  recognition.onerror = (event) => {
    message.textContent = "Voice recognition error. Try again.";
    console.error(event.error);
  };
} else {
  voiceBtn.disabled = true;
  voiceBtn.textContent = "Voice Not Supported";
  message.textContent = "Voice recognition not supported in this browser.";
}
