function getComputerChoice() {
    /* Returns computer's choice for rock paper scissors
    
    Randomly generates a number between 0 and 1
    if that number is <= 1/3, returns "Rock"
    if that number is > 1/3 and <= 2/3, returns "Paper"
    if that number is > 2/3, returns "Scissors" */
    computerNumber = Math.random();
    if (computerNumber <= 1 / 3) {
        computerChoice = "Rock";
    } else if (computerNumber <= 2 / 3) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    };
    return (computerChoice);
};

function playRound(playerChoice) {
    /* Plays a single round of rock paper scissors

    Retrieves and saves the computer's choice in lowercase
    If the choices are the same, returns a string for the tie scenario
    If the player wins, returns a string for the win scenario, increases round number and player score
    If the player loses, returns a string for the loss scenario, increases round number and computer score */
    computerChoice = getComputerChoice().toLowerCase();
    if (playerChoice === computerChoice) {
        return "It's a tie! You chose " + playerChoice + " and I chose " + computerChoice + ".";
    } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
        round++
        playerScore++
        return "You win this round. You chose " + playerChoice + " and I chose " + computerChoice + ".";
    } else {
        round++
        computerScore++
        return "You lose this round. You chose " + playerChoice + " and I chose " + computerChoice + ".";
    };
};

let round = 0
let playerScore = 0
let computerScore = 0

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
console.log(rockButton)

const roundResults = document.getElementById('roundresults');
const gameResults = document.getElementById('gameresults');
const roundDisplay = document.getElementById('round');
const playerScoreDisplay = document.getElementById('playerscore');
const computerScoreDisplay = document.getElementById('computerscore');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (round <= 4) {
            rockButton.style.border = '8px inset white';
            rockButton.style.backgroundColor = 'lightgrey'
            paperButton.style.border = '8px inset white';
            paperButton.style.backgroundColor = 'lightgrey'
            scissorsButton.style.border = '8px inset white';
            scissorsButton.style.backgroundColor = 'lightgrey'
            result = playRound(button.innerText.toLowerCase());
            roundResults.innerHTML = result;
            roundDisplay.innerHTML = 'ROUND: ' + round;
            playerScoreDisplay.innerHTML = 'PLAYER: ' + playerScore;
            computerScoreDisplay.innerHTML = 'COMPUTER: ' + computerScore;
            if (result.slice(0, 7) === 'You win') {
                button.style.border = '8px inset green';
                button.style.backgroundColor = 'lightgreen';
            } else if (result.slice(0, 8) === 'You lose') {
                button.style.border = '8px inset red';
                button.style.backgroundColor = 'pink';
            } else {
                button.style.border = '8px inset yellow';
                button.style.backgroundColor = 'lightyellow';
            }
        }
        if (round === 5) {
            if (playerScore > computerScore) {
                gameResults.innerHTML = "Congratulations! You've won!"
            } else {
                gameResults.innerHTML = "Better luck next time!"
            }
        }
        return;
    });
});
