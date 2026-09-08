import {readFile, readFileSync} from "node:fs"

const data = readFileSync("./example.js", (err,data)=>{
    if(err){
        console.log("error");
        
    }
    console.log(data);
    
})
console.log(data);
