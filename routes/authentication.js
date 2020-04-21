const express = require("express");
var router = express.Router();

const registeration = require("../controllers/authentication/register");
const loginin = require("../controllers/authentication/login");
const authenticating = require("../controllers/authentication/auth");

// show all users
router.post("/register", registeration.register);
router.post("/login", loginin.login);
router.post("/auth", authenticating.auth);

module.exports = router;
