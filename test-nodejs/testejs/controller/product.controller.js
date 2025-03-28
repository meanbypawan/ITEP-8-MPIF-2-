import { response } from "express";
import Product from "../model/product.model.js";

export const viewProductPage = (request,response,next)=>{
    Product.findAll()
    .then(result=>{
        return response.render("view-product.ejs",{productList: result});
    }).catch(err=>{
        console.log(err);
    });
}
export const addProductPage = (request,response,next)=>{
    return response.render("add-product.ejs");
}

export const addProduct = (request,response,next)=>{
  let {title,price,description}  = request.body;
  Product.create({title,price,description})
  .then(result=>{
    return response.redirect("/product/add-product");
  }).catch(err=>{
    console.log(err);
  });
}