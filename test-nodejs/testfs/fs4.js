import fs from "fs";
try{
 let data = fs.readFileSync("node-introduction.txt",'utf8');
 console.log(data);
}
catch(err){
    console.log(err);
    console.log("Operation failed..");
} 