const express = require('express');
const {
  getAllModifiers,
  getSingleModifier,
  createModifier,
  updateModifier,
  deleteModifier
} = require('../controllers/ModifierControllers');

const router = express.Router();

router.route('/').get(getAllModifiers).post(createModifier);

router.route('/:id').get(getSingleModifier).put(updateModifier).delete(deleteModifier);

module.exports = router;
