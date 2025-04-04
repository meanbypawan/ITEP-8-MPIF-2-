import Cart from "./cart.model.js";
import CartItem from "./cartItems.model.js";
import Category from "./category.model.js";
import Product from "./product.model.js";
import User from "./user.model.js";

Category.hasMany(Product,{
    foreignKey:"productCategory"
});
Product.belongsTo(Category,{
    foreignKey:"productCategory",targetKey:"slug"
});

User.hasOne(Cart); // inside cart table , userId{FK} will be created
Cart.belongsTo(User);

Cart.belongsToMany(Product,{through: CartItem});
Product.belongsToMany(Cart,{through: CartItem});

export  {Category,Product,User,Cart,CartItem};