const express = require("express");

const userController = require("../controllers/user");

const router = express.Router();

router.get("/", userController.getIndex);

router.get("/get-users", userController.getUsers);

router.post("/add-user", userController.addUserData);

// For now edit functionality deletes data from server and fills old data at UI.
router.get("/edit-user", userController.delUser);

router.get("/delete-user", userController.delUser);

module.exports = router;