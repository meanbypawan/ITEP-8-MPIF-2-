import Product from "../model/product.model.js";

export const updateProduct = (request,response,next)=>{
    let id = request.params.id;
    Product.update(request.body,{where:{id}})
    .then(result=>{
        return result[0] ? response.status(200).json({message: "Product updated"}) : response.status(404).json({error:"Requested resouce not available | Id not found"});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    });
}
export const deleteProduct = (request,response,next)=>{
    let id = request.params.id;
    Product.destroy({where:{id}})
    .then(result=>{
        console.log(result);
        return result ? response.status(200).json({message: "Product deleted..."}) : response.status(404).json({error: "Requested resource not available | Id not found"});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    });
}
export const fetchProduct = (request,response,next)=>{
    let id = request.params.id;
    Product.findByPk(id)
    .then(result=>{
        return response.status(200).json({product:result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    });
}
export const fetchProducts = (request,response,next)=>{
    Product.findAll()
    .then(result=>{
        return response.status(200).json({products: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    });
}
export const saveInBulkAction = (request,response,next)=>{
    let products = request.body.products;
    let data = [];
    for(let p of products){
        let productCategory = p.category;
        delete p.category;
        p.productCategory = productCategory;
        data.push(p);
    }
    Product.bulkCreate(data)
    .then(result=>{
        return response.status(201).json({message:"All product saved.."});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    });
}