/* 
function sum(num1, num2){
    let result = num1 + num2;
    console.log("numbers have been added");
    return result;
}

const summedNumbers = sum(3, 4)
console.log(summedNumbers);

function greet(name){
     alert("Hello " + name+ "!")
}
greet("Ludvig")
 */

// Create a function that multiplies two numbers!

function multiplyTwoNumbers(num1, num2) {
  return num1 * num2;
}
const multipliedNumbers = multiplyTwoNumbers(3, 2);
console.log(multipliedNumbers);

function firstWordOfSentence(sentence) {
  splitSentence = sentence.split(" ");
  return splitSentence[0];
}

function firstWordOfSentence2(sentence) {
  let output = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] == " ") {
      return output;
    }
    output += sentence[i];
  }
}

const sentence = "The quick brown fox jumps";

const firstWord = firstWordOfSentence2(sentence);
console.log(firstWord);

// Create a FUNCTION that RETURNs the LAST word of a sentence
// 1
console.log(sentence.split(" ").pop());
// 2: the same
const splitArr = sentence.split(" ");
const last = splitArr[splitArr.length-1]
console.log(last);

const arr = [1,2,3,4,5,6]
console.log(arr[0]); // first element
console.log(arr[arr.length-1]); // last element

const string = "hello"
console.log(string[0]);
console.log(string[string.length-1]);
console.log(string.split("").pop());

// Create a function that makes every other word CAPITALIZED in a sentence
// hint: loop
// hint: split(" ") join(" ")
// hint: toUpperCase
// hint: % remainder

// "The quick brown fox jumps"
//             = 
// "THE quick BROWN fox JUMPS"


const words = sentence.split(" ")
for(let i = 0; i < words.length; i+=2){
    words[i] = words[i].toUpperCase()
}
console.log(words.join(" "));

