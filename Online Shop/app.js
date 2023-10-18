const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRotes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRotes);
app.use(shopRoutes);

// app.use();
app.listen(3000);
