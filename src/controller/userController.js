const { userService } = require('../services');
const jwtUtil = require('../utils/jwtUtil');

const createPostUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  // if (!req.user.admin) return res.status(403).json({ message: 'Somente admin pode cadastrar' });
  try {
    const newUser = await userService.createPostUser({ displayName, email, password, image });
    const token = jwtUtil.createToken(newUser);
    res.status(201).json({ token });
  } catch (error) { 
    console.error(error);
    const errorMessage = error.message;
    res.status(422).json({ message: errorMessage });
  }
};

module.exports = {
  createPostUser,
};