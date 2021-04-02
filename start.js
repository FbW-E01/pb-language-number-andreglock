const string = 'Sting value concatenated with a number value - ';
const number = 75;

console.log(string + number); // + concatenates the variables

let vTwo = '1005'
let vThree = '10.05'

console.log(typeof vTwo, typeof vThree);

vTwo = parseInt(vTwo);
vThree = parseFloat(vThree);

console.log(typeof vTwo, typeof vThree);