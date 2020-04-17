const express = require("express");
var router = express.Router();
const auth = require("../controllers/auth");

// registration process : create account after firebase + pick a user type
router.post("/register", auth.register);
router.put("/register", auth.pickType);

// router.get("/:fireID", auth.fetchUser);

module.exports = router;
