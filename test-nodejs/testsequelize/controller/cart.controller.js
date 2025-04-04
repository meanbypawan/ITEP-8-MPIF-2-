import sequelize from "../db/dbConfig.js";
import Cart from "../model/cart.model.js";
import CartItem from "../model/cartItems.model.js";
import Product from "../model/product.model.js";

export const fetchCart = async (request,response,next)=>{
   try{ 
    let {userId} = request.params;
    let result = await Cart.findAll({where:{userId},include:{model:Product},raw: true});
    return response.status(200).json({result});
   }
   catch(err){
    console.log(err);
    return response.status(500).json({error: "Internal Server Error"});
   }
}
export const removeFromCart = async(request,response,next)=>{
    try{
        let {userId,productId} = request.params;
        let cart = await Cart.findOne({where:{userId},raw:true});
        console.log(cart);
        if(cart){
          let result = await CartItem.destroy({where:{cartId: cart.id,productId}});  
          return  result ? response.status(200).json({message:"Item successfully removed from cart"}) : response.status(404).json({error:"Resource not found"});
        }
        else
         return response.status(404).json({error: "Requested resource not found.."});
    }
    catch(err){
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});
    }
}
export const addToCart = async (request,response,next)=>{
   const t = await sequelize.transaction();
   try{ 
    let {userId,productId} = request.body;
    let cart = await Cart.findOne({where:{userId}});
    if(cart){
      let status = await CartItem.findOne({where:{productId,cartId:cart.id},raw:true});
      if(status)
        return response.status(200).json({message:"Item already added in cart."});
      await CartItem.create({productId,cartId:cart.id},{transaction: t});
      await t.commit();
      return response.status(201).json({message:"Item successfully added in cart"});
    } 
    else{
     // very firsttime user performing add to cart
     let cart = await Cart.create({userId},{transaction: t});
     let cartId = cart.dataValues.id;
     await CartItem.create({productId,cartId},{transaction: t});
     await t.commit();
     return response.status(201).json({message:"Item successfully added in cart"});
    }
   }
   catch(err){
     await t.rollback();
     return response.status(500).json({error:"Internal Server Error"});
   } 
}