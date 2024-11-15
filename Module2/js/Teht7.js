
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

let sides = Number(prompt("Enter the number of sides:"));
let roll;
let htmlContent = "<ul>";
do {
    roll = rollDice(sides);
    htmlContent += (`<li>Rolled: ${roll}</li>`);
} while (roll !== sides);
htmlContent += "</ul>";

document.querySelector('#tulosAlue').innerHTML = htmlContent;