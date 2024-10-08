const jwt = require('../utils/jwtUtil');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  const bearer = authorization.split(' ')[1];

  try {
    const data = jwt.verifyToken(bearer);

    req.user = data;
    next(); 
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};