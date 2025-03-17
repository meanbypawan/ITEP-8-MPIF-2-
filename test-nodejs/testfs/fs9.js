import fs from "fs";

const readStream = fs.createReadStream("node-introduction.txt");
const writeStream = fs.createWriteStream("data.txt");

readStream.pipe(writeStream);