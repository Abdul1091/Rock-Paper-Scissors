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

console.log(getComputerChoice());

// function to get the human's choice
function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors:").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Choose rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}

console.log(getHumanChoice());


let humanScore = 0;
let computerScore = 0;


// Function to play a single round
function playRound(humanChoice, computerChoice) {

    //humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }

    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    )   {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }

    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

    console.log(`Scores => Human: ${humanScore}, Computer: ${computerScore}`);
}

console.log(playRound());