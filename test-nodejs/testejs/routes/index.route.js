import express from "express";
console.log("Index Router...");
const router = express.Router();

router.get("/",(request,response,next)=>{
    return response.render("sign-in.ejs");
});

export default router;