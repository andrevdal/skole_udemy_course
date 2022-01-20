const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.send("<h1><b>Pushing P</b></h1>")
})
app.get("/andreas", (req, res)=>{
    res.send("han er best på koding!")
})
app.get("/about", (req, res)=>{
    res.send("This site is just my first express server! It's is actually very easy:)");
})
app.listen(400, ()=>{
    console.log("started");
});