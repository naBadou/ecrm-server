const express = require("express");
var router = express.Router();

const admin = require("../controllers/admin");

// show all users
router.get("/users", admin.users);
router.get("/user/:uid", admin.user);
router.get("/users/remove", admin.removeUsers);

// show all transporters
router.get("/transporters", admin.transporters);
router.get("/transporters/remove", admin.removeTransporters);

// show all managers
router.get("/managers", admin.managers);
router.get("/managers/remove", admin.removeTManagers);

module.exports = router;
