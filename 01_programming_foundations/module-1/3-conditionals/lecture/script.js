
//console.log("Hello");
let numbers = 123; // numbers
let string = "hello!"; // strings: text, words
let boolean = true; // true/false: sant/usant 1/0


let warm = true;
if (warm) {
  console.log("Wear shorts");
}
if (!warm) {
  console.log("Wear pants");
} 

 
if (warm) {
  console.log("Wear shorts");
} else {
  console.log("Wear pants");
} 


let temperature = 30
  if (temperature > 25){
    console.log("Wear swimwear"); 
  
    
  } else if(temperature> 20){
    console.log("Wear shorts");
  } else {
    console.log("Wear pants");
  } 

let value = 123

if(value){
    console.log("This is running"); // will this be logged?
    console.log(value);
}

  
let val = false ? "hei": "nei"
console.log(val);

let key = "C"
switch(key){
    case "A":
        console.log("a");
        break;
    case "B":
        console.log("b");
        break;
    case "C":
        console.log("c");
        break; 
} 

for(let count = 0; count<10; count ++){
    if(count%3 == 0){ // We now only print numbers divisible by 3
        console.log(count);
    }  
}
let array = ["Ravn", "Abishan", "Alexandra", "Sara"]
let text = "Hello class!"

for(let i = 0; i<text.length; i++){
    console.log(text[i]);
}
