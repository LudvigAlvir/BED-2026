
for(let i = 0; i<5; i++){
    console.log(i);
}

let count = 10;
while(count<15){
    console.log(count);
    count++
}

for(let i = 0; i<1000; i++ ){
    if(i%2){ // 0 or 1, 0 is falsy, 1 is truthy
        console.log("the number is: "+i);
        continue
    }
    if(i == 10){
        console.log("we are breaking");
        break;
    }
}



