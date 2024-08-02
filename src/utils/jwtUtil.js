const jwt = require('jsonwebtoken');

const createToken = (data) => {
  const token = jwt.sign(data, process.env.JWT_SECRET);
  return token;
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};

module.exports = {
  createToken,
  verifyToken,
};