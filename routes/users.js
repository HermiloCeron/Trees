const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
router.get("/", ctrl.users.renderHomepage);
router.get("/signup", ctrl.users.signup);
router.get("/login", ctrl.users.login);
router.get("/profile/:id", ctrl.users.showProfile);
router.post("/profile", ctrl.users.createUser);
router.post("/", ctrl.users.loginUser);
router.put("/profile/:id", ctrl.users.editUser);


module.exports = router;