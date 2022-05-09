// while loops

let x = 50;
while(x >= 10){
    if(x == 10) {
        console.log(x);
    }
    else {
        console.log('Not 10')
    }
    x--;
}

let nr1 = 0;
let nr2 = 1;
let temp;

fibonacciArray = [];
while (fibonacciArray.length < 25) {
    fibonacciArray.push(nr1);
    temp = nr1 + nr2;
    nr1 = nr2;
    nr2 = temp;
}

console.log(fibonacciArray);


// do while
do {
    console.log(x);
    x ++;
} while(x == 10);


// for loops
for(let i=0; i<= fibonacciArray.length; i++){
    console.log(i ** 2);
}

for (let fib of fibonacciArray){
    console.log(fib);
}

let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
};
for (let prop in car){
    console.log(car[prop]);
    console.log(prop);
}

let arrKeys = Object.keys(car);
console.log(arrKeys);

let arrValues = Object.values(car);
console.log(arrValues);