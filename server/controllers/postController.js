const models = require('../models');

module.exports = {
  getPost: async (req, res) => {
    try {
      const post = await models.Post.getPostByDate(req.user.id, req.params.date);
      console.log('post', post);
      return res.json(post);
    } catch (error) {
      console.log('error', error);
      return res.status(400).json({ error: error });
    }
  },
  create: async (req, res) => {
    const { date, comment, star } = req.body;
    try {
      await models.Post.create({
        date,
        comment,
        star,
        userId: req.user.id,
      });
      return res.json({ message: 'new post' });
    } catch (error) {
      console.log('error', error);
      return res.status(400).json({ error: error });
    }
  },
  update: async (req, res) => {
    const { comment, star } = req.body;
    try {
      const post = await models.Post.findOne({ where: { id: req.params.id } });
      if (!post) {
        return res.status(400).json({
          message: '存在しない投稿です。',
        });
      } else {
        post.comment = comment;
        post.star = star;
        await post.save();
        return res.json({
          message: '日記の内容を更新しました。',
        });
      }
    } catch (error) {
      console.log('error', error);
      return res.status(400).json({ error: error });
    }
  },
};
