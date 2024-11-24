'use strict';

const form = document.getElementById('source');
const firstnameInput = document.querySelector('[name="firstname"]');
const lastnameInput = document.querySelector('[name="lastname"]');
const targetParagraph = document.getElementById('target');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = firstnameInput.value.trim();
    const lastName = lastnameInput.value.trim();

    if (firstName && lastName) {
        targetParagraph.textContent = `Your name is ${firstName} ${lastName}`;
    } else {
        targetParagraph.textContent = 'Enter first and last name.';
    }
});
