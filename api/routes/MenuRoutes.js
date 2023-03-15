const express = require('express');
const menuController = require('../controllers/MenuController');

const router = express.Router();

router.route('/').get(menuController.getEntireMenu);

module.exports = router;
