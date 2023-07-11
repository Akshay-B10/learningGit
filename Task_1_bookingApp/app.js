const path = require("path");

const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const sequelize = require("./util/database");

const userRoutes = require("./routes/user");

app.use(cors());
app.use(bodyParser.json({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use(userRoutes);

sequelize
    .sync()
    .then((result) => {
        app.listen(4000);
    })
    .catch((err) => console.log(err));