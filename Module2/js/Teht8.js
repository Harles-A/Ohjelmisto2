
function concat(arr) {
    let result = "";
    for (let str of arr) {
        result += str;
    }
    return result;
}

let names = ["Johnny", "DeeDee", "Joey", "Marky"];
document.querySelector('#tulosAlue').innerHTML = (`<p>${concat(names)}</p>`);
