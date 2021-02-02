const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.trees.index);
router.get('/new', ctrl.trees.renderNew);
router.get('/:id', ctrl.trees.renderTrees);
router.get('/:id/edit', ctrl.trees.editTree);
router.post('/', ctrl.trees.newTree);
router.put('/:id', ctrl.trees.updateTree);
router.delete('/:id', ctrl.trees.deleteTree);

module.exports = router;