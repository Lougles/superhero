const express = require('express');
const router = new express.Router();

const {asyncWrapper} = require('../helpers/TChelper');
const {
  getHeroController,
  getHeroByIdController,
  addHeroController,
  deleteHeroController,
  updateHeroController,
  updateHeroImgController
} = require('../controllers/heroController');
const {
  addHeroValidation,
  updateHeroValidation
} = require('../middlewares/validation');
const {upload} = require('../helpers/heroAvatar')


router.get('/', asyncWrapper(getHeroController));
router.get('/:id', asyncWrapper(getHeroByIdController));
router.post('/', addHeroValidation, asyncWrapper(addHeroController));
router.delete('/:id', asyncWrapper(deleteHeroController));
router.patch('/:id', updateHeroValidation, asyncWrapper(updateHeroController));
router.patch('/img/:id', upload.single('img'), asyncWrapper(updateHeroImgController));

module.exports = router;