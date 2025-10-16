class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
  }

  start() {
    this.isRunning = true;
    console.log(`${this.make} ${this.model} is starting.`);
  }

  stop() {
    this.isRunning = false;
    console.log(`${this.make} ${this.model} is stopping.`);
  }

  displayDetails() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  }
}