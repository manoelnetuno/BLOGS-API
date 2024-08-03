const express = require('express');
const { userController } = require('../controller');
const middleware = require('../middleware/userValidations');
const authmiddlaware = require('../middleware/authMiddleware');

const router = express.Router();
router.get('/', authmiddlaware, userController.getAllUsers);
router.post(
  '/', 
  middleware.validateUser,
  middleware.existingUser,
  userController.createPostUser,
);

module.exports = router;