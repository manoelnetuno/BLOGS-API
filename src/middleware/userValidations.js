const { User } = require('../models');

const validateUser = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  if (displayName.length < 8) {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long' });
  }
  if (password.length < 6) {
    return res.status(400).json({ 
      message: '"password" length must be at least 6 characters long' });
  }
  if (!image) {
    return res.status(400).json({ message: '"image" must be exist' });
  }
  next();
};
const existingUser = async (req, res, next) => {
  const { email } = req.body;
  const alreadyUser = await User.findOne({ 
    where: { email },
  });
  if (alreadyUser) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};
module.exports = {
  validateUser,
  existingUser,
};