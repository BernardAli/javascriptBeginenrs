class Vehcile {
    constructor (color, currentSpeed, maxSpeed){
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed
    }

    move() {
        console.log("moving at", this.currentSpeed);
    }

    accelerate(amount) {
        this.currentSpeed += amount;
    }
}


class Motocycle extends Vehcile {
    constructor (color, currentSpeed, maxSpeed, fuel){
        super(color, currentSpeed, maxSpeed);
        this.fuel = fuel;
    }

    doWheelie() {
        console.log("Driving on one wheel!");
    }
}

let audi = new Vehcile("White", 70, 180);
console.log(audi.maxSpeed);
audi.accelerate(50);
console.log(audi.currentSpeed);

let ducati = new Motocycle("red", 120, 300, "premium");
ducati.accelerate(80);
console.log(ducati.currentSpeed);