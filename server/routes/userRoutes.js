const express = require("express");
const userController = require("../controllers/userControllers");

const router = express.Router();

router.post("/signup", userController.signup);

module.exports = router;
