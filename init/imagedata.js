const mongoose = require("mongoose");
const Image = require("../models/Image.js");

async function main(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/EcomDB");
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
                    url: "/images/mobilesAndTablets.webp"
                },
                {
                    name: "Fashion",
                    url: "/images/fashion.webp"
                },
                {
                    name: "Electronics",
                    url: "images/electronics.webp"
                },
                {
                    name: "Home & Furniture",
                    url: "/images/homeAndFurniture.png"
                },
                {
                    name: "Tv & Appliances",
                    url: "/images/tvAndAppliances.webp"
                },
                {
                    name: "Beauty & Personal care",
                    url: "/images/beautyAndPersonalCare.png"
                },
                {
                    name: "Grocery",
                    url: "/images/grocery.webp"
                },
                {
                    name: "Kids",
                    url: "/images/kids.jpg"
                }
            ]
        );

        console.log("Prev data Cleared and New Data Logged")
    } catch(err){
        console.log(err);
    }
}

intiData();