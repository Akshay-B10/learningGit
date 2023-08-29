const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();
const mongoose = require("mongoose");

const User = require("./models/user");

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes = require("./routes/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//   User.findById("64eb971e28196ca6634d127d")
//     .then(user => {
//       req.user = new User(user.name, user.email, user.password, user.cart, user._id);
//       next();
//     })
//     .catch(err => console.log(err));
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/user', userRoutes);

app.use(errorController.get404);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(3000)
  })
  .catch(err => {
    console.log(err);
  })