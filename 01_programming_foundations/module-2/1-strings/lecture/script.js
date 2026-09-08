
const string1 = "The most normal way";
const string2 = 'This is with single quotes';
const quote = '"Let them have cake" Mari Antoinette'
const english = "It's raining"
const string3 = `
String with back tics
`

/* const string = "example";
 // strings can be looped over like arrays
for(let i = 0; i<string.length; i++){
    string[i] = "0"; // Nothing happens, string are immutable
}
console.log(string);
const arr = ["e","x","a","m","p","l","e"]
for(let i = 0; i<arr.length; i++){
    arr[i] = "0" // ["0","0","0","0","0","0","0"] // arrays can change
}
console.log(arr); //Hva logges */

let string = "hei";
let arr = ["h","e","i"]
string[0] = "N" // String er fortsatt "hei"
arr[0] = "N" // arr er nå ["N","e","i"]


const sorting = ["Abba", "abba","ole", "Ola","Bjørn"]
sorting.sort()
console.log(sorting); // Abba, Bjørn, Ola, abba, ole
const numbers = [7,21,43,1,32,623,1,12,32,34,98,19999]
numbers.sort() // 1, 1,7, 21, 32,43
 // 1,1,12,199999,21,32,32,34
  console.log(numbers);

 let str1 = "hello";
 let str2 = "Hello"; 
console.log(str1.toUpperCase() == str2.toUpperCase());//TRUE!
 
let sentence = "It's sunny outside!"
let splitSentence = sentence.split(" ")
let joinedString = splitSentence.join(" ")
console.log(joinedString); // ["it's", "sunny", "outside!"]

const reversedSentence = sentence.split("").reverse().join("") 
console.log(reversedSentence);


const firstName = "alexandra";
const splitName = firstName.split("")
splitName[0] = splitName[0].toUpperCase()
const capitalizedName = splitName.join("")
console.log(capitalizedName);


