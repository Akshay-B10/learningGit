const path = require("path");

const rootDir = require("../util/path");
const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
}

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title, req.body.size);
    product.save();
    res.redirect("/");
}