const express = require('express');
const router = express.Router();
const controller = require('../controller/itemController');

router.get('/all-item', controller.getAllItems);

router.get('/search', controller.getSearchItem);

router.get('/search/:id', controller.getSingleItem);

module.exports = router;
