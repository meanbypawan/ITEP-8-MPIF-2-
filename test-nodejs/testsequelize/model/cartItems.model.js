import sequelize from "../db/dbConfig.js";

const CartItem = sequelize.define("cartItem",{});

export default CartItem;