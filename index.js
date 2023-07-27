// Get the buttons, result, player score, computer score, and computer choice elements
const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const computerChoiceEl = document.getElementById("computer-choice"); // New element

// Initialize player and computer scores
let playerScore = 0;
let computerScore = 0;

// Event listener for each button click
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the user's choice and the computer's choice
    const userChoice = button.id;
    const computerChoice = getComputerChoice();

    // Display the computer's choice to the user
    computerChoiceEl.textContent = `Computer chose ${computerChoice}`;

    // Determine the result of the round and update the scores
    const roundResult = playRound(userChoice, computerChoice);
    resultEl.textContent = roundResult;
  });
});

// Function to get the computer's choice randomly (rock, paper, or scissors)
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to play a single round and return the result message
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}
