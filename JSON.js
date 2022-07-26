let str = "{\"name\": \"Maaike\", \"age\": 30}";
let obj = JSON.parse(str);
console.log(obj.name, "is", obj.age);

let dog = {
    "name": "wiesje",
    "breed": "dachshund"
};
console.log(JSON.stringify(dog));