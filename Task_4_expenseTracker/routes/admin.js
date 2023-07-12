const express = require("express");

const router = express.Router();

const adminController = require("../controller/admin");

router.get("/", adminController.getIndex);

router.post("/add-expense", adminController.addExpense);

router.get("/delete-expense", adminController.delExpense);

module.exports = router;