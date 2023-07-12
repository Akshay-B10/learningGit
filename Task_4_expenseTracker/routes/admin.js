const express = require("express");

const router = express.Router();

const adminController = require("../controller/admin");

router.get("/", adminController.getIndex);

router.post("/add-expense", adminController.addExpense);

router.get("/get-all-expenses", adminController.getAllExpenses);

router.get("/edit-expense", adminController.delExpense); // For now; data is deleted from server and fills form by deleted data

router.get("/delete-expense", adminController.delExpense);

module.exports = router;