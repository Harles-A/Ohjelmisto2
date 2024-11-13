
let diceAmount = parseInt(prompt("Enter the number of dice:"));
let sumTarget = parseInt(prompt("Enter the sum you want to check for:"));
let attempts = 10000;
let successes = 0;

for (let i = 0; i < attempts; i++) {
    let sum = 0;
    for (let j = 0; j < diceAmount; j++) {
        sum += Math.floor(Math.random() * 6) + 1;
    }
    if (sum === sumTarget) {
        successes++;
    }
}

let probability = (successes / attempts) * 100;
document.querySelector('#tulosAlue').innerHTML = `Probability of ${sumTarget} with ${diceAmount} dice is ${probability.toFixed(2)}%`;
