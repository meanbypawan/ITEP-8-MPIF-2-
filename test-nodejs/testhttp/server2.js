import http from "http";
import fs from "fs";
import url from "url";
const server = http.createServer((request,response)=>{
 const parsedUrl = url.parse(request.url,true);
 console.log(parsedUrl); 
 if(parsedUrl.pathname == "/home" || parsedUrl.pathname == "/"){
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
  else if(parsedUrl.pathname == "/about"){
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
  else if(parsedUrl.pathname == "/contact"){
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
  else if(parsedUrl.pathname.match("\.png$") || parsedUrl.pathname.match("\.jpg$")){
    let readStream = fs.createReadStream("./"+parsedUrl.pathname);
    readStream.pipe(response);
  }
  else if(parsedUrl.pathname.match("\.css$")){
    let readStream = fs.createReadStream("./views"+parsedUrl.pathname);
    readStream.pipe(response);
  }
  else if(parsedUrl.pathname == "/add" && request.method == "GET"){
    console.log("/add route request caught...");
    let a = parsedUrl.query.a*1;
    let b = parsedUrl.query.b*1;
    response.write(`<h1>Addition : ${a+b}</h1>`);
    response.end();
  }
});

server.listen(3000,()=>{
    console.log("Seever Started At : http://localhost:3000");
});