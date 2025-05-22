import { Order } from "../model/order.model.js";

export const getOrderHistory = async (request,response,next)=>{
  try{
      let userId = request.params.userId;
      let result = await Order.find({userId}).populate("productId");
      return response.status(200).json({history: result});
  }
  catch(err){
    return response.status(500).json({error: "Internal Server Error"});
  }
}
export const placeOrder = async (request, response, next) => {
    try {
      const order = await  Order.create({
            productId: request.body.productId,
            userId: request.body.userId,
            name: request.body.name,
            contact: request.body.contact,
            deliveryAddress: request.body.address,
            billAmount: request.body.billAmount
        });
        return response.status(201).json({message: "Order placed successfully..",order});
    }
    catch (err) {
       return response.status(500).json({error:"Internal Server Error"});
    }
}   