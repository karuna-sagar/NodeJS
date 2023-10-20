const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRotes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRotes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
// app.use();
app.listen(3000);
