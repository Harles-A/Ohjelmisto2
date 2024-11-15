
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let roll;
let htmlContent = "<ul>";
do {
    roll = rollDice();
    htmlContent += (`<li>Rolled: ${roll}</li>`);
} while (roll !== 6);
htmlContent += "</ul>";

document.querySelector('#tulosAlue').innerHTML = htmlContent;
