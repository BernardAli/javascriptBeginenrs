// Arrays
let cars = new Array('nissan', 'daewoo', 'ford', 'toyota', 'honda');
cars[10] = "gmc";
cars[6] = 'tesla';
console.log(cars);
console.log(cars[6]);
console.log(cars.length);

cars.pop();
cars.shift();
console.log(cars);
cars.unshift('rover');
console.log(cars);

// Finding an element
let find = cars.find((e) => { return e === 'ford'})
console.log(find);

// IndexOf
console.log(cars.indexOf('ford'));
console.log(cars.indexOf(undefined));

// sorting
cars.sort();
console.log(cars);

// reverse
cars.reverse();
console.log(cars);

// Objects
console.log(typeof cars);


let dog = { 
    dogName: "JavaScript",
    weight: 2.4,
    color: "brown",
    age: 3,
    burglarBiter: true
};
dog.color = 'white';
dog.breed = 'chihuahua';

console.log(dog.dogName);
console.log(dog['color']);
console.log(dog);

let company = { companyName: "Healthy Candy",
    activity: "food manufacturing",
    activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
    address: [{
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
        },
        {
        street: "1st West avenue",
        number: "5",
        zipcode: "75001",
        city: "Addison",
        state: "Texas"
        }],
    yearOfEstablishment: 2021
};
console.log(company.address[0].state);
console.log(company.activities[0]);

let newCompany = company;
console.log(newCompany);