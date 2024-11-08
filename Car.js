// imp the Car class that imp vehicle
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
//create instance of the car class
const myCar = new Car("Ford", "Mustang", 2023);
myCar.start();
