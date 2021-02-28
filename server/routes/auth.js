const express = require('express');
const authRouter = express.Router();
// controller
const { signup, login, logout } = require('../controllers/authController');
// validator
const { signupFormValidator } = require('../middleware/validators/auth');
const { executeValidation } = require('../middleware/validators');

authRouter.post('/signup', signupFormValidator, executeValidation, signup);
authRouter.get('/login', login);
authRouter.get('/logout', logout);

module.exports = authRouter;
