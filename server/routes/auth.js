const express = require('express');
const authRouter = express.Router();
// controller
const authController = require('../controllers/authController');
// validator
const {
  signupFormValidator,
  resendFormValidator,
  loginFormValidator,
} = require('../middleware/validators/auth');
const { executeValidation } = require('../middleware/validators');

authRouter.post('/signup', signupFormValidator, executeValidation, authController.signup);
authRouter.post('/activation', authController.activateAccount);
authRouter.post(
  '/resend',
  resendFormValidator,
  executeValidation,
  authController.resendConfirmationEmail,
);
authRouter.post('/login', loginFormValidator, executeValidation, authController.login);

module.exports = authRouter;
