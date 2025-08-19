const mongoose = require("mongoose");
const Image = require("../models/Image.js");
require("dotenv").config({ path: __dirname + "/../.env" });

async function main(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to data base");
    }catch(err){
        console.log(err);
    }
}

main();

let intiData = async () =>{
    try{
        await Image.deleteMany({});


        await Image.create(
            [
                {
                    name: "Mobile and Tablets",
                    url: "/header-img/mobilesAndTablets.webp"
                },
                {
                    name: "Fashion",
                    url: "/header-img/fashion.webp"
                },
                {
                    name: "Electronics",
                    url: "/header-img/electronics.webp"
                },
                {
                    name: "Home & Furniture",
                    url: "/header-img/homeAndFurniture.png"
                },
                {
                    name: "Tv & Appliances",
                    url: "/header-img/tvAndAppliances.webp"
                },
                {
                    name: "Beauty & Personal care",
                    url: "/header-img/beautyAndPersonalCare.png"
                },
                {
                    name: "Grocery",
                    url: "/header-img/grocery.webp"
                },
                {
                    name: "Kids",
                    url: "/header-img/kids.jpg"
                },{
                    name: "Mobile and Tablets",
                    url: "/header-img/mobilesAndTablets.webp"
                },
                {
                    name: "Fashion",
                    url: "/header-img/fashion.webp"
                },
                {
                    name: "Electronics",
                    url: "/header-img/electronics.webp"
                },
                {
                    name: "Home & Furniture",
                    url: "/header-img/homeAndFurniture.png"
                },
            ]
        );

        console.log("Prev data Cleared and New Data Logged")
    } catch(err){
        console.log(err);
    }
}

intiData();