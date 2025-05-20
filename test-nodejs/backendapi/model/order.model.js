import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    name:String,
    contact:Number,
    deliveryAddress: String,
    orderDate:{
        type:Date,
        default: Date.now()
    },
    billAmount:Number
});

export const Order = mongoose.model("order",orderSchema);