const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

// Import routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactRoutes = require("./routes/contactus");
const successRoutes = require("./routes/success");

const errorController = require("./controllers/error"); // Importing controller for 404 page.

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use(contactRoutes);

app.use(successRoutes);

app.use(errorController.errorPage); // Use of controller to get html page

app.listen(4000);
// app.listen at backend; var server = http.createServer(this); return server.listen.apply(server, arguments);