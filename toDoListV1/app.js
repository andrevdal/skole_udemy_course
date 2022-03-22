const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }))
let taskInput = "";
let tasks = []

app.get("/", (req, res) => {
  let rightNow = new Date();
  let dateSettings = {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    };
  let today = rightNow.toLocaleDateString('nb-NO', dateSettings);
  res.render("list", { dayOfWeek: today, newTasks : tasks });
});
app.post("/", (req, res)=>{
  let taskInput = req.body.taskInput
  res.redirect("/")
  tasks.push(taskInput)
});

app.listen(2000, () => {
  console.log("we good in da hood on port 2k");
});
