
let participantNumber = prompt("Enter the number of participants:");
let participants = [];

for (let i = 0; i < participantNumber; i++) {
    let name = prompt(`Enter name of the ${i + 1}. participant:`);
    participants.push(name);
}

participants.sort();

let htmlContent = "<ol>";
for (let participant of participants) {
    htmlContent += `<li>${participant}</li>`;
}
htmlContent += "</ol>";

document.querySelector('#tulosAlue').innerHTML = htmlContent;

