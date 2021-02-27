const express = require('express');
const authRouter = express.Router();
// controller
const { signup, login, logout } = require('../controllers/authController');

authRouter.get('/signup', signup);
authRouter.get('/login', login);
authRouter.get('/logout', logout);

module.exports = authRouter;
