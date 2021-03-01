let myAnimals = [{species: 'Monkey', Kingdom: 'fungi', Domain: 'Eukarya'},
{species: 'Dog', Kingdom: 'Phylum', Domain: 'Eukarya'}];

console.log(myAnimals.push({species: 'Leapord', Kingdom: 'Pyhlum', Domain: 'Eukarya'}));


// map 
let result = myAnimals.map(animalsName);

function animalsName(x) {
    return x.species;
}

// console.log(result);


// filter
let dog = myAnimals.filter(myDog);

function myDog(b) {
    return b.species == 'Dog';
}

//console.log(dog);


//  chaining action
function onlyBabies(x) {
 return x.Kingdom == 'fungi';
}

let output = myAnimals.filter(myDog).filter(animalsName).map(onlyBabies);

console.log(output);


