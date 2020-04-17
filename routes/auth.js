const express = require("express");
var router = express.Router();
const auth = require("../controllers/auth");

// registration process : create account after firebase + pick a user type
router.post("/register", auth.register);
router.patch("/register", auth.pickType);

// login / check type / grab user data
router.get("/:fireID", auth.user);

module.exports = router;
