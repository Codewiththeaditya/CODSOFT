const mongoose = require("mongoose");
const Electronics = require("../models/electronic.js");
require("dotenv").config({path: __dirname + "/../.env"});

async function main(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected");
    }catch(err){
        console.log(err);
    }
};

main();

let logData = async ()=>{
    await Electronics.deleteMany({});

    try{
        await Electronics.create([
            {
                name: "Asus Monitors",
                url: "/best-of-electronics/asus-monitors.webp",
                price: 134999
            },
            {
                name: "Earphones",
                url: "/best-of-electronics/earbuds.webp",
                price: 129999
            },
            {
                name: "Monitors",
                url: "/best-of-electronics/monitor.webp",
                price: 29990
            },
            {
                name: "Projectors",
                url: "/best-of-electronics/projector.webp",
                price: 174990
            },
            {
                name: "Speakers",
                url: "/best-of-electronics/speaker.webp",
                price: 41990
            },
            {
                name: "Watches",
                url: "/best-of-electronics/watches.webp",
                price: 1300
            }, //lets repeat that shit again for eg :
            {
                name: "Asus Monitors",
                url: "/best-of-electronics/asus-monitors.webp",
                price: 134999
            },
            {
                name: "Earphones",
                url: "/best-of-electronics/earbuds.webp",
                price: 129999
            },
            {
                name: "Monitors",
                url: "/best-of-electronics/monitor.webp",
                price: 29990
            },
            {
                name: "Projectors",
                url: "/best-of-electronics/projector.webp",
                price: 174990
            },
            {
                name: "Speakers",
                url: "/best-of-electronics/speaker.webp",
                price: 41990
            },
            {
                name: "Watches",
                url: "/best-of-electronics/watches.webp",
                price: 1300
            }
            ]);

            console.log("Prev deleted and new logged !");
    }catch(err){
        console.log(err);
    }
};

logData();

