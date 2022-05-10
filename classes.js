class Dog {
    constructor(dogName, weight, color, breed){
        this.dogName = dogName;
        this.weight = weight;
        this.color = color;
        this.breed
    }
}

let dog = new Dog("defender", 2.4, "brown", "local")
console.log(dog.color);


class Person {
    constructor(firstName, lastName, age=82){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greet() {
        console.log(`Hello ${this.firstName}`);
    }

    compliment(name, object) {
        return "That's a wonderful " + object + ", " + name;
    }
}

let person1 = new Person("Ben", "Ali", 29);
console.log(person1);
person1.greet();
console.log(person1.compliment("Ben", "Great"));