const express = require('express');
const { categoriesController } = require('../controller');
const authmiddlaware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authmiddlaware, categoriesController.postCategory);
router.get('/', authmiddlaware, categoriesController.getAll);

module.exports = router;
