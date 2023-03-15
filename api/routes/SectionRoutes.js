const express = require('express');
const sectionController = require('../controllers/SectionControllers');
const validateApi = require('../middlewares/ApiValidator');

const router = express.Router();

router.route('/').get(sectionController.getAllSections).post(sectionController.createSection);

router
  .route('/:id')
  .get(sectionController.getSingleSection)
  .put(sectionController.updateSection)
  .delete(sectionController.deleteSection);

module.exports = router;
