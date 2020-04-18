const express = require("express");
var router = express.Router();

const publicProfiles = require("../controllers/publicProfiles");

// Transporter Public Profil
router.get("/:uid", publicProfiles.publicTransporter);

module.exports = router;
