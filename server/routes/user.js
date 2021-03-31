const express = require('express');
const userRouter = express.Router();
// controller
const userController = require('../controllers/userController');

userRouter.get('/user/:id', userController.read);
userRouter.put('/user/', userController.update);

module.exports = userRouter;
