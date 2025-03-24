import express from "express";

const router = express.Router();

router.get("/",(request,response,next)=>{
    return response.render("sign-in.ejs");
});

export default router;