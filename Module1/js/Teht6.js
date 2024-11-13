if (confirm("Should I calculate the square root?")) {
    let number = parseFloat(prompt("Enter a number:"));

    if (number < 0) {
        document.querySelector('#tulosAlue').innerHTML = "The square root of a negative number is not defined.";
    } else {
        let squareRoot = Math.sqrt(number);
        document.querySelector('#tulosAlue').innerHTML = `The square root of ${number} is ${squareRoot.toFixed(2)}.`;
    }
} else {
    document.querySelector('#tulosAlue').innerHTML = "The square root is not calculated.";
}
