import { validationResult } from "express-validator";
import { User } from "../model/user.model.js"
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const verifyAccount = async (request,response,next)=>{
  try{
     let {email} = request.body;
     User.updateOne({email},{$set:{verified: true}})
     .then(result=>{
        return response.status(201).json({message: "Account verified"});
     }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error.."});
     });
  }
  catch(err){
    console.log(err);
    return response.status(500).json({error: "Internal Server Error"});
  }
}
export const signInAction = async (request, response, next) => {
    try {
        let { email, password } = request.body;
        let user = await User.findOne({ email });
        console.log(user);
        if (!user)
            return response.status(401).json({ error: "Unauthorized user | Email id not found" });
        if(!user.verified)
            return response.status(401).json({error:"Not verified user | Verify your account first"});
        
        let status = bcrypt.compareSync(password, user.password);
        user.password = undefined;
        if(status){
          let payload = {currentUser: user._id};
          let token = jwt.sign(payload,"dflfdkjreiwreriovnxvmnvxcm@#12fdfre#"); 
          response.cookie("token",token);
          return  response.status(200).json({ message: "Sign In Success", user})
        }
        return response.status(401).json({ error: "Unauthorized user | Invalid password" });
    }
    catch (err) {
        return response.status(500).json({ error: "Internal Server Error" });
    }
}
export const signUpAction = async (request, response, next) => {
    try {
        const error = validationResult(request);
        if (!error.isEmpty())
            return response.status(401).json({ error: "Bad request | Invalid data", errorDetails: error.array() });
        let { password } = request.body;
        let saltKey = bcrypt.genSaltSync(12);
        password = bcrypt.hashSync(password, saltKey);
        request.body.password = password;
        let emailStatus = await sendEmail(request.body.email);
        const result = emailStatus && await User.create(request.body);
        return response.status(201).json({ message: "User created", userDetail: result });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}
const sendEmail = (toEmail) => {
    return new Promise((resolve, reject) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_ID,
                pass: process.env.GMAIL_PASSWORD
            }
        });

        let mailOptions = {
            from: process.env.GMAIL_ID,
            to: toEmail,
            subject: 'Account Verification',
            html: `<h4>Dear user</h4>
        <p>Thank you to visit us</p>
        <p><b>Link on below button to verify account</b></p>
        <p>
         <form method="post" action="http://localhost:3000/user/verify">
          <input type="hidden" value="${toEmail}" name="email"/>
          <button type="submit" style="background-color:mediumseagreen;width:200px;height:60px;color:white;">Verify</button>
         </form>
        </p>
        <h6>Thanks</h6>
        <b>Backend Api Team</b>`
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
    });
}


