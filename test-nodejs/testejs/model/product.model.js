import pool from "../db/dbConfig.js";

class Product{
    constructor(id,title,price,description){
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
    } 
    static deleteOne(productId){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                  let sql = "delete from product where id = ?";
                  con.query(sql,[productId*1],(err,result)=>{
                    con.close();
                    err ? reject(err) : resolve(result);
                  });
                }
                else reject(err);
            })
        });
    }
    static updateOne(product){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                  let sql = "update product set title=?,price=?,description=? where id = ?";
                  con.query(sql,[product.title,product.price*1,product.description,product.id*1],(err,result)=>{
                    con.close();
                    err ? reject(err) : resolve(result);
                  });
                }
                else reject(err);
            })
        });
    }
    static findById(productId){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                 let sql = "select * from product where id = ?";
                 con.query(sql,[productId*1],(err,result)=>{
                   con.release();
                   err ? reject(err) : resolve(result);
                 });
                }
                else reject(err);
            })
        });
    }
    static findAll(){
        return new Promise((resolve,reject)=>{
           pool.getConnection((err,con)=>{
            if(!err){
              let sql = "select * from product";
              con.query(sql,(err,result)=>{
                con.release();
                err ? reject(err) : resolve(result);
              })
            }
            else reject(err);
           })
        }); 
    }
    static create(product){
        return new Promise((resolve,reject)=>{
          pool.getConnection((err,con)=>{
            if(!err){
               let sql = "insert into product(title,price,description) values(?,?,?)";
               con.query(sql,[product.title,product.price*1,product.description],(err,result)=>{
                con.release();
                err ? reject(err) : resolve(result);
               })  ;
            }
            else
             reject(err);
          })
        });
    }
}

export default Product;