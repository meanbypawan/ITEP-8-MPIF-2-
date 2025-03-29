import { response } from "express";
import Product from "../model/product.model.js";

export const deleteProduct = (request,response,next)=>{
    let id = request.params.id;
    Product.deleteOne(id)
    .then(result=>{
        return response.redirect("/product/view-product");
    }).catch(err=>{
        console.log(err);
    });
}
export const editProduct = (request,response,next)=>{
    let {id,title,price,description} = request.body;
    Product.updateOne({id,title,price,description})
    .then(result=>{
        return response.redirect("/product/view-product");
    }).catch(err=>{
        console.log(err);
    });
}
export const editProductPage = (request,response,next)=>{
    let productId = request.params.id;
    Product.findById(productId)
    .then(result=>{
      console.log(result);  
      return response.render("edit-product.ejs",{product:result[0]});
    }).catch(err=>{
        console.log(err);
    })
}
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