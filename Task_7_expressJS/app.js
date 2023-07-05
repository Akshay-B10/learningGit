const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const adminController = require("./controllers/admin"); // Importing controller for 404 page.

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use(adminRoutes);

app.use(shopRoutes);

app.use(adminController.errorPage); // Use of controller to get html page

app.listen(4000);
// app.listen at backend; var server = http.createServer(this); return server.listen.apply(server, arguments);