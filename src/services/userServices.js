const { User } = require('../models');

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
};