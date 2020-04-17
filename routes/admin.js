const express = require("express");
var router = express.Router();
const admin = require("../controllers/admin");

// show all users
router.get("/users", admin.users);

module.exports = router;
