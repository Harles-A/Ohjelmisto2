'use strict';

const Input1 = document.getElementById('num1');
const Input2 = document.getElementById('num2');
const operationSelection = document.getElementById('operation');
const calculateButton = document.getElementById('start');
const finalResult = document.getElementById('result');

calculateButton.addEventListener('click', () => {
    const num1 = parseFloat(Input1.value);
    const num2 = parseFloat(Input2.value);
    const operation = operationSelection.value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        finalResult.textContent = 'Enter valid number(s)!';
        return;
    }

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'multi':
            result = num1 * num2;
            break;
        case 'div':
            if (num2 === 0) {
                finalResult.textContent = "Can't divide by 0!";
                return;
            }
            result = num1 / num2;
            break;
        default:
            finalResult.textContent = 'Invalid operation.';
            return;
    }

    finalResult.textContent = `Result: ${result}`;
});
