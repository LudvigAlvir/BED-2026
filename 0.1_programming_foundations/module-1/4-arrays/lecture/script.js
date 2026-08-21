

/* let i = 0;
while(i < students.length){
    console.log(students[i]);
    i++
} */

let students = ["Alexandra", "Abishan", "Ravn", "Sara", "Aman"]

/* for(let i = 0; i<students.length; i++){
    console.log(students[i]);
} */

/* let text = prompt("Check if palindrome")
let textBackwards = ""
for(let i = text.length-1; i>=0; i--){
    textBackwards+= text[i]
}
alert(textBackwards.toLowerCase() == text.toLowerCase());
 */



let mixedArray = [1,2,3,"Ravn","Sara", false, null,1, [1,2,3]]
// create a for loop that logs out the TYPE of each element
console.log(mixedArray.length);

for(let i=0; i<mixedArray.length; i++){
    console.log(typeof mixedArray[i]);
}
const gameMap = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
let counter = 0;
for (let i=0; i<gameMap.length; i++){
    for(let k = 0; k<gameMap[i].length;k++){
        gameMap[i][k] = "X"
    }
}
console.log(gameMap);

