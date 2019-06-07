let randomDiceRoll;
let computerRoll;
let score = 0;
let computerScore = 0; 

function takeTurn() {

    randomDiceRoll = (Math.floor(Math.random()*6+1));

    score = score + randomDiceRoll;

    document.getElementById("score").innerHTML = score;
    document.getElementById("diceImage").src = `img/dice${randomDiceRoll}.png`;
}


function computerTakeTurn() {

    computerRoll = (Math.floor(Math.random()*6+1));

    computerScore = computerScore + computerRoll;

    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("diceImage").src = `img/dice${computerRoll}.png`;
}

document.getElementById("button").addEventListener("click", takeTurn); 
