import { response } from "express";
import Category from "../model/category.model.js";

export const saveInBulkAction = (request,response,next)=>{
    Category.bulkCreate(request.body)
    .then(result=>{
        return response.status(201).json({message: "All category saved.."});
    }).catch(err=>{
        return response.status(500).json({error:"Internal Server Error"});
    })
}

export const fetchCategories = (request,response,next)=>{
    Category.findAll()
    .then(result=>{
        return response.status(200).json({categories: result});
    }).catch(err=>{
        return response.status(500).json({error:"Internal Server Error"});
    });
}