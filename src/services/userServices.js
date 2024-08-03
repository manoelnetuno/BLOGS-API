const { User } = require('../models');

const getAll = async () => {
  const getUsers = await User.findAll({ attributes: { exclude: ['password'] } });
  return getUsers;
};

const createPostUser = async ({ displayName, email, password, image }) => {
  const newUser = {
    displayName,
    email,
    password,
    image,
  };
  console.log(newUser);
  try {
    await User.create(newUser);
    return newUser;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createPostUser,
  getAll,
};