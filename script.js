// Step 2

const randomNumber = Math.random();

function getComputerChoice() {
  if (randomNumber <= 0.333) return "Rock";
  else if (randomNumber > 0.333 && randomNumber <= 0.666) return "Paper";
  else if (randomNumber > 0.666) return "Scissors";
}
console.log(getComputerChoice());

// Step 3, I added the case insensitivity here in this step.

function getHumanChoice() {
  let popup = prompt("Choose Rock, Paper, or Scissors");

  if (popup === null) {
    return;
  }
  if (popup.toLowerCase() === "rock") {
    return "Rock";
  }
  if (popup.toLowerCase() === "paper") {
    return "Paper";
  }
  if (popup.toLowerCase() === "scissors") {
    return "Scissors";
  }

  // console.log(popup);
  // if (popup != null) {
  //     document.getElementById ("g").innerHTML = "You chose " + popup;
  // }
}

// Step 4

let humanScore = 0;
let computerScore = 0;

// Step 5

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock" && computerChoice === "Scissors") {
    humanScore++;
    console.log("You win! Rock beats Scissors!");
  } else if (humanChoice === "Rock" && computerChoice === "Paper") {
    computerScore++;
    console.log("You lose! Rock lost to Paper!");
  } else if (humanChoice === "Rock" && computerChoice === "Rock") {
    console.log("It was a tie!");
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    computerScore++;
    console.log("You lose! Paper was sliced by Scissors!");
  } else if (humanChoice === "Paper" && computerChoice === "Paper") {
    console.log("It was a tie!");
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    humanScore++;
    console.log("You win! Paper covered Rock!");
  } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
    console.log("It was a tie!");
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    humanScore++;
    console.log("You win! Scissors cut Paper!");
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    computerScore++;
    console.log("You lose! Scissor was crushed by Rock!");
  }
}
for (let i = 0; i < 5; i++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
}
console.log(
  "Human Score " + humanScore + " " + "Computer Score " + computerScore,
);
