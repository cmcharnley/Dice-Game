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
    document.getElementById("diceImage2").src = `img/dice${computerRoll}.png`;
}

function checkScore() {
    if (score >= 20) {
        alert('You win!'); location.reload();
    } else if (computerScore >=20) {
        alert('Sorry. computer wins'); location.reload();
    } else ('roll again');
}

document.getElementById('button').addEventListener('click',() => {    
    takeTurn();
    computerTakeTurn();
    checkScore();
});
