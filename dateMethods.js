// Creating Dates
let currentDateTime = new Date();
console.log(currentDateTime);

let now2 = Date.now();
console.log(now2);

let milliDate = new Date(1600000000000);
console.log(milliDate);

let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
console.log(stringDate);

let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
console.log(specificDate);


// Methods to get and set the elements of a date
let d = new Date();
console.log("Day of week:", d.getDay());
console.log("Day of month:", d.getDate());
console.log("Month:", d.getMonth());
console.log("Year:", d.getFullYear());
console.log("Seconds:", d.getSeconds());
console.log("Milliseconds:", d.getMilliseconds());
console.log("Time:", d.getTime());

d.setFullYear(2010);
console.log(d);

d.setMonth(9);
console.log(d);

// Parsing Dates
let d1 = Date.parse("June 6, 2021");
console.log(d1);

console.log(d.toDateString());
console.log(d.toLocaleDateString());