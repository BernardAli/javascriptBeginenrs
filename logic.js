// if elseif else statements

let rain = true;
if(rain){
    console.log("** Taking my umbrella when I need to go outside **");
} else {
    console.log("** I can leave my umbrella at home **");
}

// tenary operator
let age = 20;
let pass = age > 18 ? "pass" : "fail";
console.log(pass);


// Switch statement

switch(age){
    case(18):
    case(20):
        console.log('True');
        break;
    default:
        console.log('False');
        break;
}