let edward = {
    firstName: 'Edward',
    lastName: 'Robertson',
    driveFlight() {
        return this.firstName + ' ' + this.lastName + ' ' +
        'is riding a flight';

    }
    
}

function iAmDriving() {
    console.log(this.firstName + ' ' + this.lastName + ' ' +
    'is riding a driving');
}
// excute the iAmDriving Function
iAmDriving.call(edward);

let outPut = edward.driveFlight();
console.log(outPut);



