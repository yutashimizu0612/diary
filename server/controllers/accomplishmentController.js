const models = require('../models');

module.exports = {
  // TODO 全件取得（6件ずつ）
  getAllAccomplishments: async (req, res) => {},
  // TODO 日付を指定する（URL？パラメータ？）
  getAccomplishmentsCounts: async (req, res) => {
    try {
      const counts = await models.Accomplishment.getAccomplishmentsCounts(
        req.user.id,
        '2021-04-13',
        '2021-04-15',
      );
      console.log('counts', counts);
      return res.json(counts);
    } catch (error) {
      console.log('error', error);
      return res.status(400).json({ error: error });
    }
  },
  // TODO 日付を指定する（URL？パラメータ？）
  getAccomplishments: async (req, res) => {
    try {
      const accomplishments = await models.Accomplishment.getAccomplishmentsByDate(
        req.user.id,
        '2021-04-15',
      );
      console.log('accomplishments', accomplishments);
      return res.json(accomplishments);
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
    if (!content) {
      return res.status(400).json({
        message: '内容は入力必須です。',
      });
    }
    try {
      const accomplishment = await models.Accomplishment.findOne({ where: { id: req.params.id } });
      if (!accomplishment) {
        return res.status(400).json({
          message: '存在しない投稿です。',
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
