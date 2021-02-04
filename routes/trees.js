const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/:userId/', ctrl.trees.index);
router.get('/:userId/new', ctrl.trees.renderNew);
router.get('/:userId/:id', ctrl.trees.renderTrees);
router.get('/:userId/:id/edit', ctrl.trees.editTree);
router.post('/:userId/', ctrl.trees.newTree);
router.put('/:userId/:id', ctrl.trees.updateTree);
router.delete('/:userId/:id', ctrl.trees.deleteTree);

module.exports = router;