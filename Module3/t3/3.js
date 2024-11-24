'use strict';
const names = ['John', 'Paul', 'Jones'];

const target = document.getElementById('target');

let listHTML = '';

for (const name of names) {
    listHTML += `<li>${name}</li>`;
}

target.innerHTML = listHTML;