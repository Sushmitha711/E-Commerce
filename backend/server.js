const dotenv=require("dotenv").config();
const express=require("express");
const cors=require("cors");
const bodyparsel=require("body-parser");
const mongoose=require("mongoose");

const app=express();

const PORT=process.env.PORT || 5000;

// Connectiong to mongodb to server

mongoose
.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server started at port ${PORT}`)
    })
})
.catch((err)=>{console.log(err)})