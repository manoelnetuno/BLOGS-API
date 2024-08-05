const express = require('express');
const { BlogPostController } = require('../controller');
const authmiddlaware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authmiddlaware, BlogPostController.PostCreate);

module.exports = router;