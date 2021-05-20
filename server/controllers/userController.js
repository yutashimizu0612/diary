const models = require('../models');

module.exports = {
  read: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await models.User.findOne({ where: { id: userId } });
      if (!user) {
        return res.status(404).json({
          error: {
            message: 'Could not get user info',
            code: 'not_found',
          },
        });
      }
      user.password = undefined;
      res.json(user);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
  update: async (req, res) => {
    const { name } = req.body;
    try {
      const user = await models.User.findOne({ where: { id: req.user.id } });
      if (!user) {
        return res.status(404).json({
          error: {
            message: 'User info update failed',
            code: 'not_found',
          },
        });
      }
      if (!name) {
        return res.status(400).json({
          error: {
            message: 'User info update failed',
            code: 'required',
          },
        });
      } else {
        user.name = name;
        await user.sae();
        return res.json({
          name: user.name,
        });
      }
    } catch (error) {
      return res.status(500).json({
        error: {
          message: 'User info update failed',
          code: 'internal_error',
        },
      });
    }
  },
};
