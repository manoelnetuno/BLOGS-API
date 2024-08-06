const express = require('express');
const { BlogPostController } = require('../controller');
const authmiddlaware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authmiddlaware, BlogPostController.PostCreate);
router.get('/', authmiddlaware, BlogPostController.getAllBlogs);
router.get('/:id', authmiddlaware, BlogPostController.getAllbyid);
router.put('/:id', authmiddlaware, BlogPostController.updateBlogs);
router.delete('/:id', authmiddlaware, BlogPostController.deleteBlogs);

module.exports = router;