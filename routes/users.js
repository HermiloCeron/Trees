const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
router.get("/", ctrl.users.renderHomepage);
router.get("/signup", ctrl.users.signup);
router.get("/login", ctrl.users.login);

module.exports = router;