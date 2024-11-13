
let name = prompt("Enter the student's name:");
let houseNumber = Math.floor(Math.random() * 4) + 1;
let house;

if (houseNumber === 1) {
    house = "Gryffindor";
} else if (houseNumber === 2) {
    house = "Ravenclaw";
} else if (houseNumber === 3) {
    house = "Hufflepuff";
} else {
    house = "Slytherin";
}

document.querySelector('#tulosAlue').innerHTML = `${name}, you are ${house}.`;
