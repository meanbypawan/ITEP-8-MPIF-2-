import { Cart } from "../model/cart.model.js";
export const fetchCart = (request,response,next)=>{
    let userId = request.params.userId;
    console.log(userId);
    Cart.find({userId}).populate("cartItems.productId")
    .then(result=>{
        return response.status(200).json({cartDetails:result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    });
}
export const addToCart = async (request,response,next)=>{
   try{ 
    let {userId,productId} = request.body;
    let cart = await Cart.findOne({userId});
    if(cart){
      let status =  cart.cartItems.some((product)=>{return productId == product.productId});
      if(status)
        return response.status(200).json({message: "Item already added in cart"});
      cart.cartItems.push({productId});
      await cart.save();
      return response.status(201).json({message: "Item successfully added in cart"});
    }
    else{
        // First time
        await Cart.create({userId,cartItems:[{productId}]});
        return response.status(201).json({message: "Item added successfully.."});
    }
   }
   catch(err){
    console.log(err);
    return response.status(500).json({error: "Internal Server Error"});
   }
}