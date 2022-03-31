const express = require("express");
const bodyParser = require("body-parser");
const { request } = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static("public"))
let tasks = []
let workTasks = []

app.get("/", (req, res) => {
  let rightNow = new Date();
  let dateSettings = {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    };
  let today = rightNow.toLocaleDateString('nb-NO', dateSettings);
  res.render("list", { listTitle: today, newTasks : tasks });
});
app.post("/", (req, res)=>{
    let taskInput = req.body.taskInput
    console.log(req.body);
  if (req.body.taskAddButton === 'Work list'){
    workTasks.push(taskInput)
    res.redirect("/work")
  } else{
    res.redirect("/")
    tasks.push(taskInput)
  }
});

app.get("/work", (req, res)=>{
  res.render("list", {listTitle: "Work list", newTasks : workTasks })
})

app.listen(2000, () => {
  console.log("we good in da hood on port 2k");
});
