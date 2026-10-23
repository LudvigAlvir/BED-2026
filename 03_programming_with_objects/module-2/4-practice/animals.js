class Animal {
  constructor(name, age = 0) {
    this.name = name;
    this.age = age;
  }
  setAge(age) {
    if (typeof age != "number") {
      console.log("age must be a number");
      return;
    }
    if (age <= 0) {
      console.log("Age must be a postive number");
      return;
    }
    this.age = age;
  }
  setName(name) {
    if (typeof name != "string") {
      console.log("Name must be a string");
      return;
    }
    if (name.length < 1) {
      console.log("Name must exist");
      return;
    }
    if (name == this.name) {
      console.log("Can't change name to current name");
      return;
    }
    this.name = name;
  }
  speak() {
    console.log("No sound specified");
  }
}

class Dog extends Animal {
  constructor(name, age, breed = "mix") {
    super(name, age);
    this.breed = breed;
  }
  speak() {
    console.log("Woof woof!");
  }
}
class Dachs extends Dog {
  constructor(name, age) {
    super(name, age, "Dachs");
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name, age);
  }
  speak() {
    console.log("Meow");
  }
}

const animal = new Animal("Fido", 1);
const dog = new Dog("Taco", 7);

/* console.log(animal instanceof Dog); // false
console.log(dog instanceof Animal); // true
console.log(dog instanceof Dog); // true */


