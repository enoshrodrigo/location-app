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
app.get("/api/cartCount",async(req,res)=>{
    const addCart =   db.query("SELECT  COUNT(id) FROM cart",(err,result)=>{
        if(err){

        }
      
            return res.send(result)
            
        
    })
})
app.post("/api/addtocart",async(req,res)=>{
    const data = req.body.data;
    console.log(data);
    const addCart =   db.query("INSERT INTO cart (categoryid, itemname, price, link, id, total ) VALUES (?,?,?,?,?,?)",
    [data.categoryid, data.itemname, data.price, data.link, data.id, data.price], (err,result)=>{
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

app.get("/getTotal",async(req,res)=>{
    db.query("SELECT total FROM cart",async (err, result) => {
       let total=0;
         result.map((data)=>{
        total=total+data.total;
        //  console.log(data.total)
        
        })
        res.send({total:total})
                  
     })
 })

app.post("/quntity",async(req,res)=>{
    const {id,quntity}=req.body;

  const up=  await db.query("UPDATE `cart` SET `quntity` = '?' WHERE `cart`.`id` = ?",[quntity,id], (err, result) => {
        if(err){
           return console.log(err)
        }
        
     })
   const qun= await db.query("UPDATE `cart` SET `total` = '?'*price WHERE `cart`.`id` = ?",[quntity,id], (err, result) => {
        if(err){
           return console.log(err)
        }
       
     })
   res.send("Updated");

 })

app.post("/delete",async(req,res)=>{
    db.query("DELETE FROM cart WHERE id=?", req.body.id,(err, result) => {
         res.send(result);
     })
 })



app.listen("5000",()=>{
    console.log("Running on port 5000")
 })