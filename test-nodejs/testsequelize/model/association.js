import Category from "./category.model.js";
import Product from "./product.model.js";

Category.hasMany(Product,{
    foreignKey:"productCategory"
});
Product.belongsTo(Category,{
    foreignKey:"productCategory",targetKey:"slug"
});

export  {Category,Product};