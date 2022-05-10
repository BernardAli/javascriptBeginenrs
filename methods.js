let s = "Hello";
console.log(
s.concat(" there!")
.toUpperCase()
.replace("THERE", "you")
.concat(" You're amazing!")
);

let x = 7;
console.log(!isNaN(x));

// decoding and encoding
let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURI(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURI(encoded_uri);
console.log("Decoded:", decoded_uri);

//decodeUriComponent() and encodeUriComponent()
let uri2 = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri2 = encodeURIComponent(uri2);
console.log("Encoded:", encoded_uri2);
let decoded_uri2 = decodeURIComponent(encoded_uri2);
console.log("Decoded:", decoded_uri2);

// Parsing Numbers with parseInt()
let str_int = "6";
let int_int = parseInt(str_int);
console.log("Type of ", int_int, "is", typeof int_int);

let str_float = "7.6";
let int_float = parseInt(str_float);
console.log("Type of", int_float, "is", typeof int_float);
let str_binary = "0b101";
let int_binary = parseInt(str_binary);
console.log("Type of", int_binary, "is", typeof int_binary);
let str_nan = "hello!";
let int_nan = parseInt(str_nan);
console.log("Type of", int_nan, "is", typeof int_nan);

// Making floats with parseFloat()
let str_version_nr = "2.3.4";
let float_version_nr = parseFloat(str_version_nr);
console.log("Type of", float_version_nr, "is", typeof float_version_nr);


// Array Methods
let arr = ["grapefruit", 4, "hello", 5.6, true];
function printStuff(element, index) {
    console.log("Printing stuff:", element, "on array position:", index);
}

arr.forEach(printStuff);


function checkString(element, index) {
    return typeof element === "string";

}
let filterArr = arr.filter(checkString);
console.log(filterArr);

console.log(arr.every(checkString));

// Mapping
let arr2 = [2, 4, 6, 8];
let mappedArr = arr2.map(x => x ** 2);
console.log(mappedArr);

// Last Occurrence
let bb = ["so", "bye", "bye", "love"];
console.log(bb.lastIndexOf("bye"));
console.log(bb.lastIndexOf("hi"));

// String Methods
// Combining strings
let s1 = "Hello ";
let s2 = "JavaScript";
let result = s1.concat(s2);
console.log(result);

// Converting a string to an array
let arr_result = result.split(" ");
console.log(arr_result);

// Converting an array to a string
let letters = ["a", "b", "c"];
let y = letters.join("");
console.log(y);

// Working with index and positions
let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
let index_re = poem.indexOf("re");
console.log(index_re);

let indexNotFound = poem.indexOf("python");
console.log(indexNotFound);

if(poem.indexOf("python") != -1) {
    // do stuff
    console.log(indexNotFound);
} else {
    console.log("Not Found");
}

let searchStr = "When I see my fellow, I say hello";
let pos = searchStr.search("lo");
console.log(pos);

// Creating Substrings
let str = "Create a substring";
let substr1 = str.slice(5);
let substr2 = str.slice(0,3);
console.log("1:", substr1);
console.log("2:", substr2);

// Replacing parts of the string replace() and replaceAll()
let hi = "Hi buddy";
let new_hi = hi.replace("buddy", "Pascal");
console.log(new_hi);

let s3 = "hello hello";
let new_s3 = s3.replaceAll("hello", "oh");
console.log(new_s3);

// Uppercase and lowercase
let low_bye = "bye!";
let up_bye = low_bye.toUpperCase();
console.log(up_bye);
let caps = "HI HOW ARE YOU?";
let fixed_caps = caps.toLowerCase();
console.log(fixed_caps);

// The start and end of a string
let encouragement = "You are doing great, keep up the good work!";
let bool_start = encouragement.startsWith("You");
console.log(bool_start);
let bool_end = encouragement.endsWith("Something else");
console.log(bool_end);