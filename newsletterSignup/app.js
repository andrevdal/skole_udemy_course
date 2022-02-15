const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")

const app = express()

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
    console.log("It happend!!!")
})

app.listen(600, ()=>{
    console.log("we gud in da hood on port 600");
})