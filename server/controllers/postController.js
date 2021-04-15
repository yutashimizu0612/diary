const models = require('../models');

module.exports = {
  // TODO 日付を指定する（URL？パラメータ？）
  getPosts: async (req, res) => {
    try {
      const posts = await models.Post.getPostsByDate(req.user.id, '2021-04-15');
      console.log('posts', posts);
      return res.json(posts);
    } catch (error) {
      console.log('error', error);
      return res.status(400).json({ error: error });
    }
  },
  create: async (req, res) => {
    const { content, published } = req.body;
    if (!content) {
      return res.status(400).json({
        message: '内容は入力必須です。',
      });
    }
    try {
      await models.Post.create({
        content,
        published,
        userId: req.user.id,
      });
      return res.json({ message: 'new post' });
    } catch (error) {
      console.log('error', error);
      return res.status(400).json({ error: error });
    }
  },
  update: async (req, res) => {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({
        message: '内容は入力必須です。',
      });
    }
    try {
      const post = await models.Post.findOne({ where: { id: req.params.id } });
      if (!post) {
        return res.status(400).json({
          message: '存在しない投稿です。',
        });
      } else {
        post.content = content;
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
