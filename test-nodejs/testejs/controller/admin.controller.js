import pool from "../db/dbConfig.js";
export const signInAction = (request,response,next)=>{
    let {email,password} = request.body;
    pool.getConnection((err,con)=>{
       if(!err){
         let sql = "select * from admin where email = ? and password = ?";
         con.query(sql,[email,password],(err,result)=>{
             con.release(); // store this con in pool
             if(!err){
                 if(result.length!=0)
                     return response.render("dashboard.ejs");
                 else
                    console.log("Invalid email id or password");
             }
             else
              console.log(err);
         });
       }
       else
         console.log(err);
    });
 };