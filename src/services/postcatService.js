// const { BlogPost, PostCategory, sequelize } = require('../models');

// const createPostBlog = async ({ title, content, categoryIds }) => {
//   const transaction = await sequelize.transaction();
//   try {
//     const newBlogPost = await BlogPost.create({ title, content }, { transaction });
//     await Promise.all(categoryIds.map(categoryId => PostCategory.create({ postId: newBlogPost.id, categoryId }, { transaction })));
//     await transaction.commit();
//     return newBlogPost;
//   } catch (e) {
//     await transaction.rollback();
//     throw e;
//   }
// };

// module.exports = {
//   createPostBlog,
// };