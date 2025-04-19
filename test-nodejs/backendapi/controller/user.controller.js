import { validationResult } from "express-validator";
import { User } from "../model/user.model.js"
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
export const signInAction = async (request, response, next) => {
    try {
        let { email, password } = request.body;
        let user = await User.findOne({ email });
        console.log(user);
        if (!user)
            return response.status(401).json({ error: "Unauthorized user | Email id not found" });
        let status = bcrypt.compareSync(password, user.password);
        user.password = undefined;
        return status ? response.status(200).json({ message: "Sign In Success", user }) : response.status(401).json({ error: "Unauthorized user | Invalid password" });
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


