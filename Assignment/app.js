const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const users = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "pug");
app.set("views", "views");

app.get("/", (req, res, next) => {
  res.render("index", { titleDoc: "Add User" });
});

app.get("/users", (req, res, next) => {
  res.render("user", { titleDoc: "Users", users: users });
});

app.post("/add-user", (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect("/users");
});
app.listen(3000);
