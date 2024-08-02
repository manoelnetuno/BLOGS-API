const jwt = require('../utils/jwtUtil');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(403).json({ message: 'Token not found' });
  const bearer = authorization.split(' ')[1];

  try {
    const data = jwt.verifyToken(bearer);

    req.user = data;
    next(); 
  } catch (e) {
    return res.status(500).json({ message: 'Invalid token' });
  }
};