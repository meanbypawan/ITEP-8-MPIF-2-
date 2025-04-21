import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id:Number,
    title:String,
    description:String,
    category:String,
    price:Number,
    discountPercentage:Number,
    rating:Number,
    stock:Number,
    brand:String,
    weight:Number,
    warrantyInformation:String,
    shippingInformation:String,
    availabilityStatus:String,
    reviews: [{
        rating:Number,
        comment:String,
        date:String,
        reviewerName:String,
        reviewerEmail:String
    }],
    returnPolicy:String,
    images:[],
    thumbnail:String
},{
    timestamps:false
});
export const Product = mongoose.model("product",productSchema);