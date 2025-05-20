import { Order } from "../model/order.model.js";

export const placeOrder = async (request, response, next) => {
    try {
      const order = await  Order.create({
            product: request.body.productId,
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