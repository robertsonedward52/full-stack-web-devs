document.addEventListener('click', superHuman);

function superHuman() {
    document.write("<h>I am a fullstack web developer</h>");
}


// high order functions
function caculate(multiplier) {
    return function (b) {
     return b * multiplier;
    }
}

let doubleNum = caculate(4);
let tripleNum = caculate(6);
let quadrupleNum = caculate(9);

document.write(doubleNum(5) + '<br>');



let myHobbies = ['Coding', 'Reading', 'Cycling', 'Fitness'];

myHobbies.forEach(myFavorite);

function myFavorite(hobbies) {
    document.write('I love ' + hobbies + '. <br>');
}


