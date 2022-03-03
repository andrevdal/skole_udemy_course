const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")

const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res)=>{

    let name = req.body.name
    let sirName = req.body.sirname
    let email = req.body.email
    console.log(name, sirName, email);
})

app.listen(600, ()=>{
    console.log("we gud in da hood on port 600");
})
// f16f92a9a4d8de17378d1ce74c0db0ff-us14