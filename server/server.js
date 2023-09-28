const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const bodyParser = require("body-parser");
const cors=require('cors')
const mysql = require('mysql');
const app = express();
app.use(express.json());
app.use(cors());
const server = http.createServer(app);
const io = socketIO(server);

 


app.post(bodyParser.urlencoded({ extended: true }));
const db= mysql.createConnection({
    user:"root",
    host: "localhost",
    password: "",
    database: "shoppingapp",
})

app.post("/api/addtocart",async(req,res)=>{
    const data = req.body.data;
    console.log(data);
    const addCart =   db.query("INSERT INTO cart (categoryid, itemname, price, link, id ) VALUES (?,?,?,?,?)",
    [data.categoryid, data.itemname, data.price, data.link, data.id], (err,result)=>{
        if(err){
            console.log("Error with data to database")
            return res.send({error:"Error"})
        }
        // return res.send({send:"Data added"})
        db.query("SELECT * FROM cart",(err,result)=>{
             res.send(result);
        })
    })

})

app.post("/getcart",async(req,res)=>{
   db.query("SELECT * FROM cart", (err, result) => {
        res.send(result);
    })
})
app.listen("5000",()=>{
    console.log("Running on port 5000")
 })