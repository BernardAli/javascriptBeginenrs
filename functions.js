function greet() {
    console.log('Hello Ben');
}

greet();

function power(a, b=2){
    return a ** b;
}
console.log(power(2, 3));
console.log(power(2));

let check = (a, b) => a ** b;
console.log(check(8, 9));


// spread operator
let spread = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...spread, "and", "very", "powerful"];
console.log(message);
console.log(...spread);
console.log(spread.join(' ').split(' '));


// Immediately invoked function expression
(function () {
    console.log("IIFE!");
})();


// recursive functions

// factorial
let factorial = (n) => {
    if (n <= 1 ){
        return 1
    } else {
        return factorial(n -1 ) * n;
    }
}

console.log(factorial(10));