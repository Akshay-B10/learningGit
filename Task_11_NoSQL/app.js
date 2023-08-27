const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();

const db = require("./util/database");

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
//   User.findById(1)
//     .then(user => {
//       req.user = user;
//       next();
//     })
//     .catch(err => console.log(err));
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/user', userRoutes);

app.use(errorController.get404);

db.mongoConnect(() => {
  app.listen(3000);
});
