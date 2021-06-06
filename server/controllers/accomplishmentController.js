const models = require('../models');

module.exports = {
  getAccomplishmentsCounts: async (req, res) => {
    try {
      const counts = await models.Accomplishment.getAccomplishmentsCounts(
        req.user.id,
        req.query.from,
        req.query.to,
        req.query.order,
        req.query.limit,
      );
      return res.json(counts);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
  getAccomplishments: async (req, res) => {
    try {
      const accomplishments = await models.Accomplishment.getAccomplishmentsByDate(
        req.user.id,
        req.query.date,
      );
      return res.json(accomplishments);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
  create: async (req, res) => {
    const { date, content, published } = req.body;
    if (!content) {
      return res.status(400).json({
        error: {
          message: 'Accomplishment creation failed',
          code: 'required',
        },
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
      return res.status(500).json({ error: error });
    }
  },
  update: async (req, res) => {
    const { content, published } = req.body;
    if (!content) {
      return res.status(400).json({
        error: {
          message: 'Accomplishment update failed',
          code: 'required',
        },
      });
    }
    try {
      const accomplishment = await models.Accomplishment.findOne({ where: { id: req.params.id } });
      if (!accomplishment) {
        return res.status(404).json({
          error: {
            message: 'Accomplishment update failed',
            code: 'not_found',
          },
        });
      } else {
        accomplishment.content = content;
        accomplishment.published = published;
        await accomplishment.save();
        return res.json(accomplishment);
      }
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
  delete: async (req, res) => {
    try {
      const accomplishment = await models.Accomplishment.findOne({ where: { id: req.params.id } });
      if (!accomplishment) {
        return res.status(404).json({
          error: {
            message: 'Accomplishment deletion failed',
            code: 'not_found',
          },
        });
      } else {
        await accomplishment.destroy();
        return res.sendStatus(204);
      }
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
};
