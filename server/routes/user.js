const express = require('express');
const userRouter = express.Router();
const { requireLogin } = require('../middleware/auth');
// controller
const userController = require('../controllers/userController');

userRouter.get('/user/:id', requireLogin, userController.read);
userRouter.put('/user/', requireLogin, userController.update);

module.exports = userRouter;
