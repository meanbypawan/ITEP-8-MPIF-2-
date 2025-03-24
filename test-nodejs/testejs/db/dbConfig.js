import mysql from "mysql2";

const pool = mysql.createPool({
    user: "root",
    password: "",
    database:"pdb",
    connectionLimit: 100
});

export default pool;