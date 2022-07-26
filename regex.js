// Simple match
// optional i for case Insensitive
let text = "I love JavaScript!";
console.log(text.match(/javascript/i));

//Specifying multiple options for words
console.log(text.match(/javascript|nodejs|react/i));

let text2 = "I love React and JavaScript!";
console.log(text2.match(/javascript|nodejs|react/i));


// Character options
let text3 = "d";
console.log(text3.match(/[abc]/));
console.log(text3.match(/[abcd]/));

// range
console.log(text3.match(/[a-d]/));

// any letter, lowercase or uppercase
console.log(text3.match(/[a-zA-Z]/));
console.log(text3.match(/[a-z]/i));
console.log(text3.match(/[a-zA-Z0-9]/));

let text4 = "äé!";
console.log(text4.match(/[a-zA-Z0-9]/));

let text5 = "Just some text.";
console.log(text5.match(/./g));

let text6 = "I'm 29 years old.";
console.log(text6.match(/\d/g));

let text7 = "In the end or at the beginning?";
console.log(text7.match(/\bin/gi));

let text8 = 357;
console.log(nr.match(/3/g));