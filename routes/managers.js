const express = require("express");
var router = express.Router();

const publicProfiles = require("../controllers/publicProfiles");

// Manager Public Profil
router.get("/:uid", publicProfiles.publicManager);

module.exports = router;
