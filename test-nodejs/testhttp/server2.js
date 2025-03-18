import http from "http";
import fs from "fs";
const server = http.createServer((request,response)=>{
 console.log(request.url); 
 if(request.url == "/home" || request.url == "/"){
   try{
    let data = fs.readFileSync("./views/home.html");
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(data);
    response.end();
   }
   catch(err){
     console.log(err);
   }
  }
  else if(request.url == "/about"){
    try{
        let data = fs.readFileSync("./views/about.html");
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write(data);
        response.end();
       }
       catch(err){
         console.log(err);
       }
  }
  else if(request.url == "/contact"){
    try{
        let data = fs.readFileSync("./views/contact.html");
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write(data);
        response.end();
       }
       catch(err){
         console.log(err);
       }
  }
  else if(request.url.match("\.png$") || request.url.match("\.jpg$")){
    let readStream = fs.createReadStream("./"+request.url);
    readStream.pipe(response);
  }
  else if(request.url.match("\.css$")){
    let readStream = fs.createReadStream("./views"+request.url);
    readStream.pipe(response);
  }
});

server.listen(3000,()=>{
    console.log("Seever Started At : http://localhost:3000");
});