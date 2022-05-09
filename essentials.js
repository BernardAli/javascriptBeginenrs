let firstName = "Eddie";
const pi = Math.PI

console.log(firstName);
console.log(pi.toFixed(4));

//String
let school = 'University of Ghana Business School (UGBS)';
console.log(`I love ${school}`);


// Number
let intNr = 1;
let decNr = 1.5;
let expNr = 1.4e15;
let octNr = 0o10; //decimal version would be 8
let hexNr = 0x3E8; //decimal version would be 1000
let binNr = 0b101; //decimal version would be 5

console.log(typeof intNr);
console.log(typeof decNr);
console.log(typeof expNr);
console.log(typeof binNr);
console.log(typeof octNr);


// Bigint
let bigNr = 90071992547409920n;
console.log(typeof bigNr);
console.log(20n + bigNr);

// Boolean
let check = true;
console.log(check);
console.log(typeof check);

// Symbol
let sym1 = Symbol('Hello');
let sym2 = Symbol('Hello');
console.log(sym1 === sym2);

// Undefined
let car;
car = "Nissan Armada"
console.log(typeof car);


//Null
let phone = null;
console.log(phone);
console.log(null === phone);

// Operators
// +, *, -, /, **, %
// ++, --

// Comparison
// ==, !=, >, >=, <, <=
// &, ||
console.log(1 & 3);



