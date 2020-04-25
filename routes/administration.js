const express = require('express');
var router = express.Router();

const ctrl = require('../controllers/admin');

// show all users
router.get('/accounts', ctrl.accounts);
router.get('/transporters', ctrl.transporters);
router.get('/managers', ctrl.managers);

router.get('/accounts/delete', ctrl.accounts_delete);
router.get('/transporters/delete', ctrl.transporters_delete);
router.get('/managers/delete', ctrl.managers_delete);

router.get('/accounts/:id', ctrl.account);
router.get('/transporters/:id', ctrl.transporter);
router.get('/managers/:id', ctrl.manager);

module.exports = router;
