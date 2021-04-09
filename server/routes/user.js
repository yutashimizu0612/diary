const express = require('express');
const userRouter = express.Router();
const { requireLogin } = require('../middleware/auth');
// controller
const userController = require('../controllers/userController');

userRouter.get('/users/:id', requireLogin, userController.read);
// TODO update時もエンドポイントにidを指定する形式に統一
// TODO update関数内部で記述しているバリデーションをmiddlewareとして記述
userRouter.put('/users/', requireLogin, userController.update);

module.exports = userRouter;
