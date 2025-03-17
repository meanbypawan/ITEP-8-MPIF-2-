import fs from "fs";

const writeStream = fs.createWriteStream("data.txt");

writeStream.write("NodeJs is uses javascript event loop model");
writeStream.end();

writeStream.on("finish",()=>{
    console.log("operation success....");
});
writeStream.on("error",(err)=>{
    console.log(err);
})