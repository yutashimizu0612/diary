const models = require('../models');

module.exports = {
  // TODO 日付を指定する（URL？パラメータ？）
  getPost: async (req, res) => {
    try {
      const post = await models.Post.getPostByDate(req.user.id, '2021-04-17');
      console.log('post', post);
      return res.json(post);
    } catch (error) {
      console.log('error', error);
      return res.status(400).json({ error: error });
    }
  },
  create: async (req, res) => {
    // TODO 同じ日付が被らないようにする
    // 日付に一意制約？
    const { comment, star } = req.body;
    try {
      await models.Post.create({
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
