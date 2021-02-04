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
router.delete('/:id', ctrl.users.deleteUser);
router.delete('/tree/:userId/:treeId',ctrl.users.deleteUserTree)


module.exports = router;