const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRotes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRotes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});
// app.use();
app.listen(3000);
