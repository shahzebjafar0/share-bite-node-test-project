const express = require('express');
const { mapItemsModifiers, getItemsModifiers } = require('../controllers/ItemModifierControllers');

const router = express.Router();

router.route('/').get(getItemsModifiers).post(mapItemsModifiers);

module.exports = router;
