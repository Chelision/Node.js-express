

Express官网:

var express = require("express")
var app = express()

app.get("/", function(req,res){
    res.end("hello world")
})
app.get("/login",function(req,res){
    res.send("hellow world")
})

app.post("/login",function(req,res){
    res.send("hellow world")
})