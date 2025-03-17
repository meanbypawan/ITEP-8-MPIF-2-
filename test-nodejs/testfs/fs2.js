import fs from "fs";

fs.readFile("node-introduction.txt",(err,data)=>{
    err ? console.log(err) : console.log(data.toString());
})