class Vehicle {
  constructor(type) {
    this.type = type;
  }

  start() {
    console.log(`${this.type} is starting...`);
  }
}

class Car extends Vehicle {
  constructor(type, brand) {
    super(type); // calls parent class constructor
    this.brand = brand;
  }

  displayInfo() {
    console.log(`${this.brand} is a type of ${this.type}.`);
  }
}

const myCar = new Car("Car", "Tesla");
myCar.start();       // Output: Car is starting...
myCar.displayInfo(); // Output: Tesla is a type of Car.
