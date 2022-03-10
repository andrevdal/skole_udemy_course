const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const https = require("https")

const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res)=>{

    const name = req.body.name
    const sirName = req.body.sirname
    const email = req.body.email

    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: name,
                LNAME: sirName
            }

        }]
    }
    const options = {
        method: "POST",
        auth: "Andreas:f16f92a9a4d8de17378d1ce74c0db0ff-us14"
    }
    const jsondData = JSON.stringify(data)
    const url = "https://us14.api.mailchimp.com/3.0/lists/b38807234e"
    const request = https.request(url, options, (response)=>{
        response.on("data", (data)=>{
            console.log(JSON.parse(data));
            res.json(JSON.parse(data))
        })
    })
    request.write(jsondData);
    request.end()
})
app.listen(600, ()=>{
    console.log("we gud in da hood on port 600");
})
// f16f92a9a4d8de17378d1ce74c0db0ff-us14
// b38807234e
// https://us14.api.mailchimp.com/3.0/lists/14703ef665