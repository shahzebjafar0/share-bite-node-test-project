const express = require('express');
const itemController = require('../controllers/ItemControllers');

const router = express.Router();

router.route('/').get(itemController.getAllItems).post(itemController.createItems);

router
  .route('/:id')
  .get(itemController.getSingleItem)
  .put(itemController.updateItems)
  .delete(itemController.deleteItems);

module.exports = router;
