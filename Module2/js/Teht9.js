
function even(numbers) {
    let evenNumbers = [];
    for (let number of numbers) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    }
    return evenNumbers;
}

let numbers = [2, 7, 4];
let evenNumbers = even(numbers);

console.log("Original array:", numbers);
console.log("New array:", evenNumbers);
