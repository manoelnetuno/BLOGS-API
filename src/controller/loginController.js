const { loginService } = require('../services');
const jwtUtil = require('../utils/jwtUtil');

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ message: 'Some required fields are missing' });
  }
  const user = await loginService.findUser(email);
  console.log(email);

  if (!user || user.password !== password) {
    return res.status(422).json({ message: 'Invalid fields' });
  }

  const userNoPass = {
    id: user.dataValues.id,
    email: user.dataValues.email,
    admin: user.dataValues.admin,
  };

  const token = jwtUtil.createToken(userNoPass);

  return res.status(201).json({ token });
};

module.exports = {
  login,
};