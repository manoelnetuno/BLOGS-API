const { blogPostService } = require('../services');

const PostCreate = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
  
    if (!title || !content || !categoryIds) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
  
    const newBlogPost = await blogPostService.createPostBlog({ title, content, categoryIds });
    return res.status(201).json(newBlogPost);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: 'Erro ao criar blog post' });
  }
};
module.exports = {
  PostCreate,
};