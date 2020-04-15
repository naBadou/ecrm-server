const express = require("express");
var router = express.Router();

const ctrl = require("../controllers/authentication");

router.get("/all", ctrl.transporters);
router.post("/add", ctrl.newTransporter);

module.exports = router;
