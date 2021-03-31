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
};
