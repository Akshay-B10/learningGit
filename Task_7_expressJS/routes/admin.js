const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminController = require("../controllers/admin"); // importing controller
const Product = require("../models/product");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
    const product = new Product(req.body.title, req.body.size);
    product.save();
    res.redirect("/");
});

router.get("/contactus", adminController.contactUs);

router.post("/success", adminController.successMsg);

module.exports = router;