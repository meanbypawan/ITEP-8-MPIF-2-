import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const Category = sequelize.define("category",{
    slug:{
        type:DataTypes.STRING,
        primaryKey: true
    },
    name:DataTypes.STRING,
    url:DataTypes.STRING
});

export default Category;
