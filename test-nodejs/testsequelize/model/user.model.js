import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const User = sequelize.define("user",{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username:{
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
        isAlpha: true
    }
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate:{
        isEmail: true
    }
  }
});
sequelize.sync()
.then(()=>{
    console.log("User table created...");
}).catch(err=>{
    console.log(err);
});
export default User;
/*
  Sequelize model trun into model class and it also provide
  interface to interact with the database.
  create()
  find()
  update()
  -----------
*/