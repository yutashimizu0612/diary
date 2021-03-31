const express = require('express');
const userRouter = express.Router();
// controller
const userController = require('../controllers/userController');

userRouter.get('/user/:id', userController.read);

module.exports = userRouter;
