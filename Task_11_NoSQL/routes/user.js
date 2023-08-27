const path = require('path');

const express = require('express');

const userController = require("../controllers/user");

const router = express.Router();

router.get('/signup', userController.signUp);

router.post("/add", userController.addUser);

module.exports = router;