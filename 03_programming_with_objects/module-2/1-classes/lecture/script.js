const toyota = {
  id: 1,
  make: "Toyota",
  model: "Corolla",
  year: 2000,
};
const audi = {
  id: 2,
  make: "Audi",
  model: "tt",
  year: 2006,
};

const tesla = {
  id: 3,
  make: "Tesla",
  model: "S",
  year: 2021,
};

let lastId = 3;
function createCar(make, model, year) {
  lastId++;
  return {
    id: lastId,
    make: make,
    model: model,
    year: year,
    start: function () {
      console.log("Vroom vroom");
    },
  };
}
// create a fiat 500 with this function
const fiat = createCar("Fiat", "500", 1980); // id = 4
const fiat2 = createCar("Fiat", "500", 1980); // id = 5
fiat.start();
console.table(fiat);
console.log(fiat2);

class Car {
  constructor(make, model, year) {
    lastId++;
    this.id = lastId;
    this.make = make;
    this.model = model;
    this.year = year;
  }
  start() {
    console.log("Vroom vroom!");
  }
}

class ElectricCar extends Car {
  constructor(make, model, year) {
    super(make, model, year);
  }
  start() {
    console.log("🎵🎵🎵🎵🎵");
  }
}
const car = new Car("Jaguar", "E-Type", 1963);
const car2 = new Car("Volvo", "240", 1990);
const car3 = new ElectricCar("Tesla", "roadster", 2026);
car2.start();
car3.start();

// Create one more car with the Car class

// Can check if an object is created from a class
console.log(car instanceof Car); // true
console.log(fiat instanceof Car); // false
console.log(car3 instanceof Car); // true, even though it's electric!

// JSON
const obj = {
  key: "value",
  age: 25,
  boolean: true,
};
const json = `{
"key": "value",
"age": 25,
"boolean": true
}`;
/* const jsonText = JSON.stringify(obj);
console.log(jsonText); */
console.log(car3);
car3.start(); // works!
const copyOfCar3 = JSON.parse(JSON.stringify(car3));
console.log(copyOfCar3);
copyOfCar3.start(); // error!
