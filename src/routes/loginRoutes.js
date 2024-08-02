const express = require('express');
const { loginController } = require('../controller');

const router = express.Router();

router.post('/login', loginController.login);

module.exports = router;