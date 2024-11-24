'use strict';

const trigger = document.getElementById('trigger');
const picture = document.getElementById('target');

trigger.addEventListener('mouseover', () => {
    picture.src = 'img/picB.jpg';
});

trigger.addEventListener('mouseout', () => {
    picture.src = 'img/picA.jpg';
});
