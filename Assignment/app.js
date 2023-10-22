const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "views");
app.listen(3000);
