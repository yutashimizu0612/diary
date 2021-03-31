const models = require('../models');

module.exports = {
  read: async (req, res) => {
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
  update: async (req, res) => {
    const { name } = req.body;
    try {
      const user = await models.User.findOne({ where: { id: req.user.id } });
      if (!user) {
        return res.status(400).json({
          message: '存在しないユーザです。',
        });
      }
      if (!name) {
        return res.status(400).json({
          message: '名前は入力必須です。',
        });
      } else {
        user.name = name;
        await user.save();
        return res.json({
          message: 'プロフィール情報を更新しました。',
        });
      }
    } catch (error) {
      console.log('error', error);
      return res.status(400).json({ error: error });
    }
  },
};
