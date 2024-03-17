const express = require("express");
const mysql = require("mysql")
const cors = require("cors")

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database: 'signup'
})

app.get("/students",(req,res)=>{
    let sql = "SELECT * FROM students";
    db.query(sql,(req,res) =>{
        if(err) return res.json("ERROR");
        return res.json(data);
    })
})

app.listen(8081, ()=>{
    console.log("Running on port....")
})

module.exports = connection;