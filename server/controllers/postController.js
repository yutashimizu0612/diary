const models = require('../models');

module.exports = {
  getPost: async (req, res) => {
    try {
      const post = await models.Post.getPostByDate(req.user.id, req.params.date);
      return res.json(post);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
  create: async (req, res) => {
    const { date, comment, star } = req.body;
    try {
      const newPost = await models.Post.create({
        date,
        comment,
        star,
        userId: req.user.id,
      });
      return res.json(newPost);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
  update: async (req, res) => {
    const { comment, star } = req.body;
    try {
      const post = await models.Post.findOne({ where: { id: req.params.id } });
      if (!post) {
        return res.status(404).json({
          error: {
            message: 'Post update failed',
            code: 'not_found',
          },
        });
      } else {
        post.comment = comment;
        post.star = star;
        await post.save();
        return res.json(post);
      }
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
};
