const { categoryService } = require('../services');

const postCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const createCategory = await categoryService.postCategory(name);
  return res.status(201).json(createCategory);
};

const getAll = async (_req, res) => {
  const findAll = await categoryService.findAllcategory();
  return res.status(200).json(findAll);
};

module.exports = {
  postCategory,
  getAll,
};