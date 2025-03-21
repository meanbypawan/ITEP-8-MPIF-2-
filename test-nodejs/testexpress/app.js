import express from "express";

const app = express();

app.get("/home",(request,response,next)=>{
  console.log("/home caught..."); 
  response.end("Home Page");
});

app.get("/about",(request,response,next)=>{
    console.log("/about caught...");
    response.end("About Page");
});

// http://localhost:3000/contact
app.get("/contact",(request,response,next)=>{
    console.log("/contact caught.....");
    response.end("Contact page");
});

app.listen(3000,()=>{
    console.log("Server Started....");
});

app.post("/wishing-message",(request,response)=>{
   response.end("Good Morning.....");
});
app.use((request,response,next)=>{
    console.log("app.use() is executec...");
    response.end("404 Requested Resource Is Not Avaiable...");
});

