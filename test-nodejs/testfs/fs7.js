/*
  Stream :-
   1. Readable
   2. Writable
   3. Duplex
   4. Transform
*/
import fs from "fs";

const readStream = fs.createReadStream("node-introduction.txt");
let fileData = "";

readStream.on("data",(chunk)=>{
   fileData = fileData + chunk;
});

readStream.on("error",(err)=>{
    console.log("Operation failed....."+err);
});

readStream.on("end",()=>{
    console.log(fileData);
})