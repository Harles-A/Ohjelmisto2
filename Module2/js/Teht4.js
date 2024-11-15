
let numbers = [];
let number;

do {
    number = Number(prompt("Enter a number:"));
    if (number !== 0) numbers.push(number);
} while (number !== 0);

numbers.sort((a, b) => b - a);

console.log("Numbers from largest to smallest:");
console.log(numbers);
