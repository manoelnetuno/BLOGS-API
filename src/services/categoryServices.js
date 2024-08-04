const { Category } = require('../models');

const postCategory = async (name) => {
  const createCategory = await Category.create({ name });
  return createCategory;
};

const findAllcategory = async () => {
  const getAll = await Category.findAll();
  return getAll;
};

module.exports = {
  postCategory,
  findAllcategory,
};