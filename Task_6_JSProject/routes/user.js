const express = require("express");

const router = express.Router();

const userController = require("../controllers/user");

router.get("/", userController.getIndex);

router.post("/add-todo", userController.addTodo);

router.get("/get-all-todos", userController.getAllTodos);

router.get("/get-todo/completed", userController.todoCompleted);

router.get("/delete-todo", userController.delTodo);

module.exports = router;