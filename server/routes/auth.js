const express = require('express');
const authRouter = express.Router();
// controller
const authController = require('../controllers/authController');
// validator
const { signupFormValidator, loginFormValidator } = require('../middleware/validators/auth');
const { executeValidation } = require('../middleware/validators');

authRouter.post('/signup', signupFormValidator, executeValidation, authController.signup);
authRouter.post('/activation', authController.activateAccount);
authRouter.post('/login', loginFormValidator, executeValidation, authController.login);

module.exports = authRouter;
