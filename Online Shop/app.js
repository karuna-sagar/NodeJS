const dotenv = require('dotenv');
dotenv.config();
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const mongoose = require('mongoose');
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use('/admin', adminRoutes);
app.use(shopRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(result => {
        console.log('conected to Database')
        app.listen(3000)
    }).catch(err => console.log(err));
