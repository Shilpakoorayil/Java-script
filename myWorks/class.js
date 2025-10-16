class Car {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  start() {
    console.log(`${this.name} is starting`);
  }
}
//object
const car1 = new Car("BMW", "X5");
car1.start(); // BMW is starting

//.......................................


class Person {
  #age; // private field
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }
}
const p1 = new Person("Alice", 25);
console.log(p1.getAge()); // 25
//console.log(p1.#age);  Error: Private field

