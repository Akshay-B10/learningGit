const express = require("express");

const contactController = require("../controllers/contactus");

const router = express.Router();

router.get("/contactus", contactController.contactUs);

module.exports = router;