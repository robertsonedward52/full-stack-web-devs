let books = 10, txt = '';

while(books < 20) {
    txt += 'There are only ' + books + ' books avaible'
    // books = books + 1;
    books++;
}

console.log(txt);


// check the current day
let today = new Date();
let result = today.getDay();
let info = '';

if(result == 4) {
 info = 'Today is Thursday';
} else {
    info = 'Please check your timezone';
}

console.log(info);



// ternary operator 