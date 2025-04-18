import db from "../db/dbConfig.js";
import mongoose from "mongoose";
export const deleteEmployee = (request,response,next)=>{
    db.collection("employees").deleteOne({_id: new mongoose.Types.ObjectId(request.params.id)})
    .then(result=>{
        console.log(result);
        return response.status(200).json({message: "Delete successfully"});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
}
export const updateEmployee = (request,response,next)=>{
    let id = request.params.id;
    db.collection("employees").updateOne({_id: new mongoose.Types.ObjectId(id)},{
        $set:{name: request.body.name,salary: request.body.salary,contact: request.body.contact,skill: request.body.skill}
    }).then(result=>{
        console.log(result);
        return response.status(200).json({message: "Updated successfully.."});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
}
export const getEmployee = (request,response,next)=>{
    console.log(request.params.id);
    db.collection("employees").findOne({_id: new mongoose.Types.ObjectId(request.params.id)})
    .then(result=>{
        return response.status(200).json({employee: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal server error"});
    })
}
export const saveEmployee = (request,response,next)=>{
    console.log(request.body);
    db.collection("employees").insertOne(request.body)
    .then(result=>{
        return response.status(201).json({message: "Employee saved.."});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
}

export const employeeList = (request,response,next)=>{
    db.collection("employees").find().toArray()
    .then(result=>{
        return response.status(200).json({employeeList: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
}
