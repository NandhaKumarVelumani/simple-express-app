const express = require("express");

const app = express();

app.get("/", function(req,res){
    res.send("<h1>Hello world</h1>")
})

const port = 3000 || process.env.PORT

app.listen(port, function(){
    console.log("server running")
})