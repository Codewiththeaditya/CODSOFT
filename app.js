const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const ejsMate = require("ejs-mate");

app.use(express.static(path.join(__dirname,"public")));

app.engine("ejs",ejsMate);
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs")




app.get("/",(req,res)=>{
    res.render("./pages/index");
})

app.listen(port,()=>{
    console.log("Listening");
})