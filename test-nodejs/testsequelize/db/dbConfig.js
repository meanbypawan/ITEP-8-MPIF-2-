import { Sequelize } from "sequelize";

const sequelize = new Sequelize("pdb","root",'',{
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate()
.then(()=>{
    console.log("Database connected...");
}).catch(err=>{
    console.log("Connection Failed.."+err);
});
export default sequelize;