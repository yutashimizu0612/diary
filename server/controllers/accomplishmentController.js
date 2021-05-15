const models = require('../models');

module.exports = {
  // TODO 全件取得（6件ずつ）
  getAllAccomplishments: async (req, res) => {},
  getAccomplishmentsCounts: async (req, res) => {
    try {
      const counts = await models.Accomplishment.getAccomplishmentsCounts(
        req.user.id,
        req.query.from,
        req.query.to,
      );
      return res.json(counts);
    } catch (error) {
      console.log('error', error);
      return res.status(400).json({ error: error });
    }
  },
  getAccomplishments: async (req, res) => {
    try {
      const accomplishments = await models.Accomplishment.getAccomplishmentsByDate(
        req.user.id,
        req.params.date,
      );
      return res.json(accomplishments);
    } catch (error) {
      console.log('error', error);
      return res.status(400).json({ error: error });
    }
  },
  create: async (req, res) => {
    const { date, content, published } = req.body;
    if (!content) {
      return res.status(400).json({
        message: '内容は入力必須です。',
      });
    }
    try {
      const accomplishment = await models.Accomplishment.create({
        date,
        content,
        published,
        userId: req.user.id,
      });
      return res.json(accomplishment);
    } catch (error) {
      console.log('error', error);
      return res.status(400).json({ error: error });
    }
  },
  update: async (req, res) => {
    const { content, published } = req.body;
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
        accomplishment.published = published;
        await accomplishment.save();
        return res.json(accomplishment);
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
        return res.sendStatus(204);
      }
    } catch (error) {
      console.log('error', error);
      return res.status(400).json({ error: error });
    }
  },
};
