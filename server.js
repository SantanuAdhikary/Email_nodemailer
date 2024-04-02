const express = require("express");
const fs = require("fs");

const {connectDb, insert,fetch} = require("./database");
const {mail} = require("./email")
const app = express();


//! database connection

connectDb();

//! middleware

app.use(express.urlencoded({extended:true}))

//!fetch data 

app.get('/fetch',async (req,res)=>{

 let fetched_data =await fetch();

 output="";
 fetched_data.map(data=>{
    output += `<h1> email</h1> : ${data.email}`
 })

 res.send(output);

})

//! routing

app.get("/about",(req,res)=>{

    res.send("this is about page ")
})

app.get("/contact",(req,res)=>{

    res.send("this is contact page")
})

app.get("/",(req,res)=>{

    fs.createReadStream("./index.html").pipe(res)
})

app.post("/email-get",(req,res)=>{
    let body = req.body;

    insert(body);
    mail(body.email)
    res.send(`subscription done by ${body.email}`);
})


app.listen(5000,err=>{
    if(err) throw err;

    console.log("app is running on port 5000")
})


