function rollDice () {
    let diceRoll = (Math.floor(Math.random()*6+1));
    return diceRoll; 
}

let randomDiceRoll;

let score = 0;

document.getElementById("button").addEventListener("click", function(){
    randomDiceRoll = rollDice();
    score = score + randomDiceRoll;
    document.getElementById("score").innerHTML = score;
    document.getElementById("diceImage").src = `img/dice${randomDiceRoll}.png`
})
