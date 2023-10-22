const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.get("/", (req, res, next) => {
  res.render();
});

app.get("/users", (req, res, next) => {
  res.render();
});

app.post("/add-user", (req, res, next) => {
  res.render();
});
app.listen(3000);
