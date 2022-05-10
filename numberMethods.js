// Checking if something is (not) a number

let x = 34;
console.log(isNaN(x));
console.log(!isNaN(x));
let str = "hi";
console.log(isNaN(str));
console.log("----------------");

// Checking if something is finite
console.log(isFinite(x));
console.log(isFinite(str));
console.log(isFinite(Infinity));
console.log(isFinite(10 / 0));
console.log("----------------");


// Checking if something is an integer
console.log(Number.isInteger(x));
console.log(Number.isInteger(str));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(2.4));
console.log("----------------");


// Specifying a number of decimals
x = 1.23456;
let newX = x.toFixed(2);
console.log(x, newX);
newX = x.toPrecision(4);
console.log(newX);

// Math Methods
//Finding the highest and lowest number
let highest = Math.max(2, 56, 12, 1, 233, 4);
let lowest = Math.min(2, 56, 12, 1, 233, 4);
console.log(highest);
console.log(lowest);

// Square root and raising to the power of
let result = Math.sqrt(4096);
console.log(result);
let result2 = Math.pow(5, 3);
console.log(result2);

// Turning decimals into integers
// round(), floor(), ceil(), trunc()

// Exponent and logarithm
x = 2;
let exp = Math.exp(x);
console.log("Exp:", exp);
let log = Math.log(exp);
console.log("Log:", log);