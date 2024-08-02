const express = require('express');
const { userController } = require('../controller');
const middleware = require('../middleware/userValidations');

const router = express.Router();

router.post(
  '/', 
  middleware.validateUser,
  middleware.existingUser,
  userController.createPostUser,
);

module.exports = router;