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