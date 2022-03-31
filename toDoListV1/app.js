const express = require("express");
const bodyParser = require("body-parser");
const { request } = require("express");
const NBdate = require(__dirname + "/date.js");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
const tasks = [];
const workTasks = [];

app.get("/", (req, res) => {
  res.render("list", { listTitle: NBdate.getFullNBDate(), newTasks: tasks });
});
app.post("/", (req, res) => {
  let taskInput = req.body.taskInput;
  console.log(req.body);
  if (req.body.taskAddButton === "Work list") {
    workTasks.push(taskInput);
    res.redirect("/work");
  } else {
    res.redirect("/");
    tasks.push(taskInput);
  }
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work list", newTasks: workTasks });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(2000, () => {
  console.log("we good in da hood on port 2k");
});
