const express = require('express');
const router = new express.Router();

const {asyncWrapper} = require('../helpers/TChelper')

router.get('/', asyncWrapper());
router.get('/:id', asyncWrapper());
router.post('/', asyncWrapper());
router.delete('/:id', asyncWrapper());

module.exports = router;