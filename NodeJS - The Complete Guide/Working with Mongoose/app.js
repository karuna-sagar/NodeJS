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
const User = require('./models/user');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    User.findById('65509deb367e503d1e115035')
        .then(user => {
            req.user = user;
            next();
        }).catch(err => console.log(err));
})

app.use('/admin', adminRoutes);
app.use(shopRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(result => {
        console.log('conected to Database');
        User.findOne().then(user => {
            if (!user) {
                const user = new User({
                    name: 'karuna',
                    email: 'karunasagar123@gmail.com',
                    cart: {
                        items: []
                    }
                });
                user.save();
            }
        })


        app.listen(3000)
    }).catch(err => console.log(err));
