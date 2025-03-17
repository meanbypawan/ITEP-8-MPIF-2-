/*
  Synchronus/Blocking Operation
  1. readFileSync()
  2. writeFileSync()
  ----------------------------------
  Asynchronous/Non-blocking operation;
  1. readFile()
  2. writeFile();
  */
import fs from "fs";
console.log("At the start....");
fs.writeFile("data.txt","NodeJs is very fast",(err)=>{
    err ? console.log(err) : console.log("operation success..");
});
console.log("At the end....");











