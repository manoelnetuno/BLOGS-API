const { blogPostService } = require('../services');
const { Category } = require('../models');

const getAllBlogs = async (_req, res) => {
  const blogs = await blogPostService.getAllBlogs();
  return res.status(200).json(blogs);
};
const getAllbyid = async (req, res) => {
  const { id } = req.params;
  const blogs = await blogPostService.getAllbyid(id);
  if (!blogs) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(blogs);
};
const PostCreate = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { user } = req;
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const categories = await Category.findAll({ where: { id: categoryIds } });
  if (categories.length !== categoryIds.length) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  const newBlogPost = await blogPostService.createPostBlog({ 
    title, 
    content, 
    userId: user.id, 
    categoryIds });
  return res.status(201).json(newBlogPost);
};
const updateBlogs = async (req, res) => {
  const { id } = req.params;
  const { content, title } = req.body;
  const { user } = req;
  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const blogsCreator = await blogPostService.getAllbyid(id);
  if (blogsCreator.id !== user.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  const BlogsUpdated = await blogPostService.updateBlogs(id, { content, title });
  return res.status(200).json(BlogsUpdated);
};
const deleteBlogs = async (req, res) => {
  const { id } = req.params;
  const { user } = req;
  const blogsCreator = await blogPostService.getAllbyid(id);
  if (blogsCreator.id !== user.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  if (!blogsCreator) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  await blogPostService.deleteBlogs(id);
  return res.status(200).send();
};
module.exports = { PostCreate, getAllBlogs, getAllbyid, updateBlogs, deleteBlogs,
};