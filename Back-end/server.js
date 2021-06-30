const http = require("http")
const express = require("express")

const server = http.createServer((req, res)=>{
    res.end("Voila !!")
}).listen(3000)