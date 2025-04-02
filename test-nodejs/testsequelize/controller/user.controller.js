import { validationResult } from "express-validator"
import User from "../model/user.model.js"
import bcrypt from "bcryptjs";
export const signInAction = async(request,response,next)=>{
  try{
    let {email,password} = request.body;
    let user = await User.findOne({where:{email},raw: true});
    if(user){
       let databasePassword = user.password;
       let status = bcrypt.compareSync(password,databasePassword);
       return status ? response.status(200).json({message: "Sign In Success",user}) : response.status(401).json({error:"Unauthorized access | Invalid password"});
    }
    return response.status(401).json({error: "Unauthorized access | Invalid Email Id"});
  }
  catch(err){
    return response.status(500).json({error: "Internal Server Error"});
  }
}
export const signUpAction = async(request,response,next)=>{
   try{ 
    const errors = validationResult(request);
    if(!errors.isEmpty())
       return response.status(400).json({error: errors.array()}); 
    let  {username,email,password} = request.body;
    let saltKey = bcrypt.genSaltSync(12);
    password = bcrypt.hashSync(password,saltKey);
    const result = await User.create({username,email,password});
    return response.status(201).json({message: "Sign up success",user: result});
   }
   catch(err){
     return response.status(500).json({error: "Internal Server Error..."});
   }

}