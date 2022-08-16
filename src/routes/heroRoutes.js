const express = require('express');
const router = new express.Router();

const {asyncWrapper} = require('../helpers/TChelper');
const {
  getHeroController,
  getHeroByIdController,
  addHeroController,
  deleteHeroController,
  updateHeroController
} = require('../controllers/heroController')



router.get('/', asyncWrapper(getHeroController));
router.get('/:id', asyncWrapper(getHeroByIdController));
router.post('/', asyncWrapper(addHeroController));
router.delete('/:id', asyncWrapper(deleteHeroController));
router.patch('/:id', asyncWrapper(updateHeroController));

module.exports = router;