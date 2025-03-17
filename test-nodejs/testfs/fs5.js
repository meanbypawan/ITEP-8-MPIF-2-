import fs from "fs";
try{
  fs.appendFileSync("abc.text","Nodejs is suitable for io-intensive application");
  console.log("operation success...");
}
catch(err){
    console.log(err);
    console.log("Operation failed...");
}