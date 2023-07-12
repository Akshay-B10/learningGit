const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./util/config");

const adminRoutes = require("./routes/admin");

const app = express();
app.use(bodyParser.json({ extended: false }));

app.use(adminRoutes);

sequelize
    .sync()
    .then(() => {
        app.listen(4000);
    })
    .catch((err) => console.log(err));