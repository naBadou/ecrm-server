const express = require("express");
var router = express.Router();

const ctrl = require("../controllers/authentication");

router.get("/all", ctrl.managers);
router.post("/add", ctrl.newManager);

module.exports = router;
