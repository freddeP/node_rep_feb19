//#  
const express = require("express");


//#
const app = express();

//#  Routes
app.get("/", function(req,res){
    res.send({msg:"welcome"});
});


app.get("/programs", function(req,res){
    res.send("all programs from SR");
});


app.get("/programs/:id", function(req,res){
    res.send("One program from SR by id");
});





//#
app.listen(7000, function(){
    console.log("lyssnar på port 7000");
});