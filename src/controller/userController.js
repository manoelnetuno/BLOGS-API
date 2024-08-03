const { userService } = require('../services');
const jwtUtil = require('../utils/jwtUtil');

const getAllUsers = async (_req, res) => {
  const Users = await userService.getAll();
  return res.status(200).json(Users);
};
const getAllbyid = async (req, res) => {
  const { id } = req.params;
  const byID = await userService.getAllbyid(id);
  if (!byID) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(byID);
};

const createPostUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  // if (!req.user.admin) return res.status(403).json({ message: 'Somente admin pode cadastrar' });
  const newUser = await userService.createPostUser({ displayName, email, password, image });
  
  const token = jwtUtil.createToken(newUser);
  res.status(201).json({ token });
};

module.exports = {
  createPostUser,
  getAllUsers,
  getAllbyid,
};