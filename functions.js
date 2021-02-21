// functions 


// function parameters
let uniCorn = firstFunc(4, 4);

function firstFunc(a, b) {
  
    return a * b;
}

console.log(uniCorn); // 16



function secondFunc(x) {
    return x * 5;
}

let myNum = secondFunc(5);

console.log(myNum);  // 25


function student(name, age) {
    console.log('My name is ' + name + ' ' + 'and I am ' + age + ' of age.');
}

student('Edward', 24);  // Edward &  age == 24


// local variables

function myName() {
    
    // local variable
    let name = 'Edward Robertson';

    console.log( name + ' ' + typeof name);
}

myName();


