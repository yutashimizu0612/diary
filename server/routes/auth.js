const express = require('express');
const authRouter = express.Router();
// controller
const authController = require('../controllers/authController');
// validator
const { signupFormValidator } = require('../middleware/validators/auth');
const { executeValidation } = require('../middleware/validators');

authRouter.post('/signup', signupFormValidator, executeValidation, authController.signup);
authRouter.post('/confirmation', authController.activateAccount);
authRouter.get('/login', authController.login);
authRouter.get('/logout', authController.logout);

module.exports = authRouter;
