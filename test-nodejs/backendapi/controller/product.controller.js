import { Product } from "../model/product.model.js"

export const getProduct = (request,response,next)=>{
    let id = request.params.id;
    Product.findById(id)
    .then(result=>{
        return response.status(200).json({product:result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
}
export const list = (request,response,next)=>{
    Product.find()
    .then(result=>{
        return response.status(200).json({products:result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    });
}
export const saveInBulk = (request,response,next)=>{
    console.log(request.body);
    Product.insertMany(request.body)
    .then(result=>{
        return response.status(201).json({message: "All product saved.."});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal Server Error..."});
    })
}