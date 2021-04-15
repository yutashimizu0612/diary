const express = require('express');
const postRouter = express.Router();
const { requireLogin } = require('../middleware/auth');
// controller
const postController = require('../controllers/postController');

postRouter.get('/posts/', requireLogin, postController.getPosts);
postRouter.post('/posts/', requireLogin, postController.create);
postRouter.put('/posts/:id', requireLogin, postController.update);

module.exports = postRouter;
