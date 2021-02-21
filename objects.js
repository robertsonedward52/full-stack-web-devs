// Objects 

let animals = {name: 'Lion', age: 12, color: 'Brown', origin: 'Africa'};

// display data 
console.log('This is ' + animals.name + ' and it is from ' + animals.origin + '.');


// Object functions
let person = {
    name: 'Edward', 
    age: 24, color: 'Black',
     origin: 'Africa',

     // nested objects
     hobbies: {
        favorite: 'UFC',
        mostFav:  'WWE'
     },

     // Object methods
    description() {
        return this.name;
    }

};

// display data 
console.log(person.description());   // return Edward 

console.log(person.hobbies.favorite); // UFC



// adding eventListener

document.addEventListener('click', mySuperFunc);

    function mySuperFunc() {
    alert('HELLO WORLD');
    }
