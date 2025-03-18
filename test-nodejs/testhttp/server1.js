import http from "http";

const server = http.createServer((request,response)=>{
   if(request.url == "/home"){
     response.write("Home Page");
     response.end();
   }
   else if(request.url == "/about"){
    response.write("About Page");
    response.end();
   }
   else if(request.url == "/contact"){
    response.write("Contact Page");
    response.end();
   }
});

server.listen(3000,()=>{
    console.log("Server Started...");
});

// http://www.facebook.com ----> IP--->Server
//http://127.0.0.1:3000