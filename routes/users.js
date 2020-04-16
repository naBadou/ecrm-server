const express = require("express");
var router = express.Router();

const authentication = require("../controllers/authentication");

router.get("/all", authentication.users);
router.post("/add", authentication.newUser);
router.patch("/edit", authentication.patchUser);

module.exports = router;
