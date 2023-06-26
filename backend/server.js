const dotenv=require("dotenv").config();
const express=require("express");
const cors=require("cors");
const bodyparsel=require("body-parser");
const mongoose=require("mongoose");

const app=express();
// middleware

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyparsel.json());

// Routes
app.get("/",(req,res)=>{
    res.send("Home page")
})

// Connectiong to mongodb to server
const PORT=process.env.PORT || 5000;

mongoose
.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server started at port ${PORT}`)
    })
})
.catch((err)=>{console.log(err)})