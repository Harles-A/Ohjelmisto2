
let numbers = [];
let number;
let duplicate = false;

do {
    number = Number(prompt("Enter a number:"));
    if (numbers.includes(number)) {
        duplicate = true;
        break;
    }
    numbers.push(number);
} while (true);

if (duplicate) {
    console.log("The number has already been given.");
}

numbers.sort((a, b) => a - b);
console.log("Given numbers in ascending order:", numbers);
