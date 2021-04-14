const models = require('../models');

module.exports = {
  // TODO 全件取得（6件ずつ）
  getAllAccomplishments: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await models.User.findOne({ where: { id: userId } });
      if (!user) {
        return res.status(400).json({
          message: '存在しないユーザです。',
        });
      }
      user.password = undefined;
      res.json(user);
    } catch (error) {
      console.log('error', error);
      return res.status(400).json({ error: error });
    }
  },
  // 日付による取得
  getAccomplishments: async (req, res) => {},
  create: async (req, res) => {
    const { content, published } = req.body;
    try {
      await models.Accomplishment.create({
        content,
        published,
        userId: req.user.id,
      });
      return res.json({ message: 'new accomplishment' });
    } catch (error) {
      console.log('error', error);
      return res.status(400).json({ error: error });
    }
  },
  update: async (req, res) => {
    const { content } = req.body;
    try {
      const accomplishment = await models.Accomplishment.findOne({ where: { id: req.params.id } });
      if (!accomplishment) {
        return res.status(400).json({
          message: '存在しない投稿です。',
        });
      }
      if (!content) {
        return res.status(400).json({
          message: '内容は入力必須です。',
        });
      } else {
        accomplishment.content = content;
        await accomplishment.save();
        return res.json({
          message: '達成したことの内容を更新しました。',
        });
      }
    } catch (error) {
      console.log('error', error);
      return res.status(400).json({ error: error });
    }
  },
  delete: async (req, res) => {
    try {
      const accomplishment = await models.Accomplishment.findOne({ where: { id: req.params.id } });
      if (!accomplishment) {
        return res.status(400).json({
          message: '存在しない投稿です。',
        });
      } else {
        await accomplishment.destroy();
        return res.json({
          message: '達成したことの内容を削除しました。',
        });
      }
    } catch (error) {
      console.log('error', error);
      return res.status(400).json({ error: error });
    }
  },
};
