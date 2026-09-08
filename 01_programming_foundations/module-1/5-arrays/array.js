// Create an array with the name of three students
// log out the array to the console afterwards

// Create a loops that logs them out one at a time
// Hints
//for()
// counter, comparison, increment
//blocks {}

/* const students = ["Ravn", "Alexandra", "Abishan"];
console.log(students);
students.push("Stian"); // What is happening
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
} */

/* const students = ["Ravn", "Alexandra", "Abishan"];
console.log(students);
students.push("Stian"); // adds student to the "back/end" of the array
console.log(students);
students.pop(); // removes element from the "back/end" of the array
console.log(students);

const newArray = [];
newArray.push(1); // [1]
newArray.push(2); // [1, 2]
newArray.pop(); // [1]
newArray.push(3); // [1, 3]
console.log(newArray); // What is in the array here?
newArray.unshift(2); // [2, 1, 3]
console.log(newArray); // What is the array here?
newArray.shift(); // [1, 3] */
// [1, 2, 3, 4, 5]
//  ^           ^
// shift       pop

// Create a new empty array
// add "dog", "cat" and "horse" to the end of the array
// log the array
// remove "horse" from the array
// log out array
// remove "dog" from the array
// log out the array
// add "turtle" to the beginning of the array
// log out the array

const animals = [];
animals.push("dog");
animals.push("cat", "horse");
console.log(animals);
animals.pop();
console.log(animals);
animals.shift();
console.log(animals);
animals.unshift("turtle");
console.log(animals);

const numbers = [1, 2, 3, 4, 5, 6];
const slicedNumbers = numbers.slice(3, numbers.length);
console.log(slicedNumbers);
console.log("numbers: ", numbers);

const splicedNumbers = numbers.splice(2, 2);
console.log(numbers);
console.log(splicedNumbers);

const carBrands = ["Toyota", "BMW", "Mercedes", "Ferrari", "Skoda"];
// Remove "Toyota and BMW" from the array
console.log(carBrands);

if (carBrands.includes("Skoda")) {
  console.log("Skoda exists");
} else {
  console.log("Adding Skoda");
  carBrands.push("Skoda");
}
const carsToDisplay = carBrands.slice(0, 3);
console.log(carsToDisplay);
for (let i = 0; i < 3; i++) {
  console.log(carBrands[i]);
}
