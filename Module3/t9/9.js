'use strict';

const calculationInput = document.getElementById('calculation');
const calculateButton = document.getElementById('start');
const finalResult = document.getElementById('result');

calculateButton.addEventListener('click', () => {
    const input = calculationInput.value.trim();
    let result;
    try {
        if (input.includes('+')) {
            const [num1, num2] = input.split('+').map(Number);
            result = num1 + num2;
        } else if (input.includes('-')) {
            const [num1, num2] = input.split('-').map(Number);
            result = num1 - num2;
        } else if (input.includes('*')) {
            const [num1, num2] = input.split('*').map(Number);
            result = num1 * num2;
        } else if (input.includes('/')) {
            const [num1, num2] = input.split('/').map(Number);
            if (num2 === 0) {
                finalResult.textContent = "Can't divide by 0!";
                return;
            }
            result = Math.floor(num1 / num2);
        } else {
            finalResult.textContent = 'Invalid operation. Use +, -, *, or /.';
            return;
        }
        if (isNaN(result)) {
            finalResult.textContent = 'Enter a valid calculation.';
        } else {
            finalResult.textContent = `Result: ${result}`;
        }
    } catch (error) {
        finalResult.textContent = 'Error! Check your input.';
    }
});
