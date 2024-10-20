// Function to get the computer's choice
function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "rock";
    } else if (random === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

//console.log(getComputerChoice());

// function to get the human's choice
function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors:").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Choose rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}

//console.log(getHumanChoice());


let humanScore = 0;
let computerScore = 0;


// Function to play a single round
function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("It's a tie!");
  }
  // Check human win conditions
  else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  }
  // Otherwise, computer wins
  else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

  // Print current scores
  console.log(`Scores => Human: ${humanScore}, Computer: ${computerScore}`);
}

//console.log(playRound());


// Main function to play the game
function playGame() {
    let rounds = 5;  // Number of rounds to play
    humanScore = 0;
    computerScore = 0;
  
    // Play 5 rounds
    for (let i = 0; i < rounds; i++) {
      const humanSelection = getHumanChoice();  // Get human's choice
      const computerSelection = getComputerChoice();  // Get computer's choice
      playRound(humanSelection, computerSelection);  // Play a round
    }
  
    // Announce the final result
    if (humanScore > computerScore) {
      console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
      console.log("Oh no! The computer won the game.");
    } else {
      console.log("It's a draw!");
    }
}
  
// Start the game
playGame()