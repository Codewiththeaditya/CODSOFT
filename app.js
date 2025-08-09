const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const Image = require("./models/Image.js");
require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/EcomDB"

app.use(express.static(path.join(__dirname,"public")));

app.engine("ejs",ejsMate);
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs")

async function main(){
    try{
        console.log(process.env.MONGO_URL);
        await mongoose.connect(MONGO_URL);
        console.log("Connected to data base");
    }catch(err){
        console.log(err);
    }
}

main();






app.get("/",async (req,res)=>{
    let allImages = await Image.find();
    res.render("./pages/index",{allImages});
})

app.listen(port,()=>{
    console.log("Listening");
})