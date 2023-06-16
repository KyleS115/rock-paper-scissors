function getComputerChoice() {
    /* Returns computer's choice for rock paper scissors
    
    Randomly generates a number between 0 and 1
    if that number is <= 1/3, returns "Rock"
    if that number is > 1/3 and <= 2/3, returns "Paper"
    if that number is > 2/3, returns "Scissors" */
    computerNumber = Math.random()
    if (computerNumber <= 1 / 3) {
        computerChoice = "Rock"
    } else if (computerNumber <= 2 / 3) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }
    return (computerChoice)
}

function playRound() {
    playerChoice = prompt("Rock, paper, or scissors?").toLowerCase()
    computerChoice = getComputerChoice().toLowerCase()
    if (playerChoice === computerChoice) {
        return "It's a tie! You chose " + playerChoice + " and I chose " + computerChoice + "."
    } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
        return "You win! You chose " + playerChoice + " and I chose " + computerChoice + "."
    } else {
        return "You lose! You chose " + playerChoice + " and I chose " + computerChoice + "."
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    let i = 1
    console.log("First to five wins!")
    for (;i <= 5; i++) {
        console.log("Round: " + i)
        roundOutcome = playRound()
        console.log(roundOutcome)
        if (roundOutcome.slice(0, 8) === "You win!") {
            playerScore++
            console.log("Your Score: " + playerScore)
            console.log("Computer's Score: " + computerScore)
        } else if (roundOutcome.slice(0, 9) === "You lose!") {
            computerScore++
            console.log("Your Score: " + playerScore)
            console.log("Computer's Score: " + computerScore)
        } else {
            console.log("Let's try that again...")
            i--
        }
    }
    if (playerScore > computerScore) {
        console.log("Congratulatons! You've won!")
    } else {
        console.log("Better luck next time...")
    }
}

game()