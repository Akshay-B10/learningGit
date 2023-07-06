const express = require("express");

const productController = require("../controllers/product"); // importing controller


const router = express.Router();

router.get("/add-product", productController.getAddProduct);

router.post("/add-product", productController.postAddProduct);

// router.get("/contactus", adminController.contactUs);

// router.post("/success", adminController.successMsg);

module.exports = router;