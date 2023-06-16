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
    /* Plays a single round of rock paper scissors

    Prompts and the saves the users's choice in lowercase
    Retrieves and saves the computer's choice in lowercase
    If the choices are the same, returns a string for the tie scenario
    If the player wins, returns a string for the win scenario
    If the player loses, returns a string for the loss scenario */
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
    /* Plays a 5 round game of rock paper scissors

    Sets both the player and computer score at 0
    Sets the current round to 1 
    Logs the win condition
    For every round <= 5,
        Logs the round number
        Plays and saves the outcome of a single round
        Logs the round's outcome
        If the player wins,
            Increases the player's score by 1
            Logs the current scores
            Increases the round number var by 1
        If the computer wins,
            Increases the computer's score by 1
            Logs the current scores
            Increases the round number var by 1
        If theres a tie,
            Logs that the round doesn't count
            The round number var remains unchanged
    Logs the final outcome of the game*/
    let playerScore = 0
    let computerScore = 0
    let currentRound = 1
    console.log("First to five wins!")
    for (;currentRound <= 5; currentRound++) {
        console.log("Round: " + currentRound)
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
            currentRound--
        }
    }
    if (playerScore > computerScore) {
        console.log("Congratulatons! You've won!")
    } else {
        console.log("Better luck next time...")
    }
}

game()