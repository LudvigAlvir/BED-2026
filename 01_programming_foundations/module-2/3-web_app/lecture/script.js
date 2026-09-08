let userName = "Guest";

function alertUser() {
  alert("Hello " + userName);
}

function getUserName() {
  userName = prompt("What is your name?");
}

function addTwoNumbers() {
  const num1 = prompt("Input first number"); // "1"  1
  const num2 = prompt("Input second number"); // "2"   2

  const result = parseInt(num1) + parseInt(num2)
  const result2 = Number(num1) + Number(num2);
  console.log("parseInt: " + result);
  console.log("Number: " + result2);
  if (isNaN(result)) {
    alert("Not valid input");
  } else {
    alert("The result is: " + result);
  }
}

function multiplyTwoNumbers() {
  const num1 = Number(prompt("Input first number"));
  const num2 = parseInt(prompt("Input second number"));
  if (isNaN(num1) || isNaN(num2)) {
    alert("error with numbers");
  } else {
    alert("result is: " + num1 * num2);
  }
}

function guessRandomNumber() {
  let randomNumber = parseInt(Math.random() * 10) + 1;
  let guessedNumber = parseInt(prompt("Guess a number between 1 and 10"));
  if (guessedNumber == randomNumber) {
    alert("Woho! Correct number!");
  } else {
    alert("Wrong! number was " + randomNumber);
  }
}

/* function logOutElement(element){
    console.log(element);
}
const arr = [1,2,3,4,5]
arr.forEach(logOutElement)

const students = ["Ravn", "Alexandra","Abishan"]
students.forEach(logOutElement)

 */


const arr = [1,2,3,4,5]

arr.forEach(function (item){
   console.log(item);
})
console.log(arr);
