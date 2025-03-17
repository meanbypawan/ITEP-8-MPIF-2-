import fs from "fs";
import readline from "node:readline";

const obj = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

obj.question("Enter 1st number : ",(n1)=>{
    obj.question("Event end number  : ",(n2)=>{
        console.log("Addition : "+(n1*1+n2*1));
        obj.close(); 
    });
    
})