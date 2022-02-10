const express = require('express')
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

app.get("/",
    (req, res)=>{
    res.sendFile(__dirname + '/index.html' )
})

app.get("/BMI", 
(req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/BMI", 
(req, res) => {
    let weight = Number(req.body.weight)
    let height = Number(req.body.height)
    let bmi = weight / Math.pow(height, 2)
    res.send("your bmi is " + bmi)
})

app.post('/', 
(req, res)=>{
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)
    let result = num1 + num2
    res.send("The awnser is " + result)
})

app.listen(300)