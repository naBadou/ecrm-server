const express = require("express");
var router = express.Router();

const ctrl = require("../controllers/admin");

// show all users
router.get("/accounts", ctrl.accounts);
router.get("/accounts/:id", ctrl.account);
router.get("/accounts/delete", ctrl.accountsRemoval);

module.exports = router;
