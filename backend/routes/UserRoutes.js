const express = require("express");
const { UserRegister } = require("../controllers/UserController");
const router = express.Router();



router.post("/register", UserRegister);

module.exports = router;