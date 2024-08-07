const { BlogPost, PostCategory, sequelize, User, Category } = require('../models');

const getAllBlogs = async () => {
  const allBlogs = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return allBlogs;
};
const getAllbyid = async (id) => {
  const getById = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return getById;
};
const createPostBlog = async ({ title, content, userId, categoryIds }) => {
  const t = await sequelize.transaction();
  try {
    const newBlogPost = await BlogPost.create(
      { title, content, userId },
      { transaction: t },
    );

    await Promise.all(categoryIds.map((categoryId) => 
      PostCategory.create(
        { postId: newBlogPost.id, categoryId },
        { transaction: t },
      )));
    await t.commit();
    return newBlogPost;
  } catch (e) {
    await t.rollback();
    throw e;
  }
};
const updateBlogs = async (id, { content, title }) => {
  await BlogPost.update({ content, title }, { 
    where: { id },
  });
  const blogsUP = await getAllbyid(id);
  return blogsUP;
};
const deleteBlogs = async (id) => {
  await BlogPost.destroy({ where: { id } });
};
module.exports = {
  createPostBlog,
  getAllBlogs,
  getAllbyid,
  updateBlogs,
  deleteBlogs,
};