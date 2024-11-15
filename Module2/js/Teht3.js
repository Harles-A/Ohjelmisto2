let dogs = [];
for (let i = 0; i < 6; i++) {
    let dogName = prompt(`Enter the name of the ${i + 1}. dog:`);
    dogs.push(dogName);
}

dogs.sort().reverse();

let htmlContent = "<ul>";
for (let dog of dogs) {
    htmlContent += `<li>${dog}</li>`;
}
htmlContent += "</ul>";

document.querySelector('#tulosAlue').innerHTML = htmlContent;
