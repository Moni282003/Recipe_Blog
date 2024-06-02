const express = require('express');
const getCategory = require('../controller/CategoryController');
const router = express.Router();

router.get('/categories/:category', getCategory.getCategory);

module.exports = router;
