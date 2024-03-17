const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");
let playerScore = 0;
let computerScore = 0;
let draw = 0;
let player; //refers to the palyer choice
let computer; //refers to the computer choice
let result; //refer to the result

//we will use the ferEach method to activate the buttons
choiceBtn.forEach(button => button.addEventListener("click", () => { //arrow function expression
    player = button.textContent; //now for every click at the player turn, it will connect to the choices
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    if (computer == "Rock" && player == "Paper" || computer == "Paper" && player == "Scissors" || computer == "Scissors" && player == "Rock") {
        playerScore++;
    }
    if (computer == "Rock" && player == "Scissors" || computer == "Paper" && player == "Rock" || computer == "Scissors" && player == "Paper") {
        computerScore++;
    } if (computer == player) {
        draw++;
    };

    document.getElementById('playerScore').textContent = `Wins: ${playerScore}`;
    document.getElementById('computerScore').textContent = `Loses: ${computerScore}`;
    document.getElementById('draw').textContent = `Draws: ${draw}`;
}))

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1; //create a random number between 1 to 3. By multiplying the Math.random by 3, this makes the options to be between 0 to 3. +1 is adding 1 to the range 1 - 3.

    switch (randNum) {
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
    }
}

//in the else if statements the browser will know to declare the right result because the sentence "You Win" comes before "You Lose" and it is confirm the comparision
function checkWinner() { //determing the winner
    if (player == computer) {
        return "Draw!";
    }
    else if (computer == "Rock") {
        return (player == "Paper") ? "You Win!" : "You Lose!" //conditional expression based on the result
    }
    else if (computer == "Paper") {
        return (player == "Scissors") ? "You Win!" : "You Lose!"
    }
    else if (computer == "Scissors") {
        return (player == "Rock") ? "You Win!" : "You Lose!"
    }
};

const clearResult = document.getElementById('clear');
const displayResult = document.getElementById('gameResults');

clearResult.addEventListener('clear', () => {
    displayResult.innerHTML = '';

    playerScore = 0;
    computerScore = 0;
    draw = 0;

    document.getElementById('playerScore').textContent = 'Wins:' + playerScore;
    document.getElementById('computerScore').textContent = 'Loses:' + computerScore;
    document.getElementById('draw').textContent = 'Draws:' + draw;
});



