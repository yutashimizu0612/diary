const User = require('../models/User');

module.exports = {
  signup: async (req, res) => {
    const { name, email, password } = req.body;
    // 既にユーザ名が登録済みの場合
    try {
      const user = await User.findOneUser('name', name);
      if (user) {
        return res.status(400).json({
          error: 'この名前は既に使用されています。別の名前をご使用ください',
        });
      }
    } catch (error) {
      console.log('findUserName error', error);
      return res.status(400).json({ error: error });
    }
    // 既にメールアドレスが登録済みの場合
    try {
      const user = await User.findOneUser('email', email);
      if (user) {
        return res.status(400).json({
          error: 'このメールアドレスは既に登録されています。',
        });
      }
    } catch (error) {
      console.log('findUserEmail error', error);
      return res.status(400).json({ error: error });
    }
    // ユーザ登録
    try {
      // TODO password hash
      // const hash = await bcrypt.hash(req.body.password, 10);
      const newUser = await User.addNewUser(name, email, password);
      console.log('newUser', newUser);
      return res.redirect(301, '/');
    } catch (error) {
      console.log('signup error', error);
      return res.status(400).json({ error: error });
    }
  },

  login: (req, res) => {
    res.send('login endpoint from controller');
  },

  logout: (req, res) => {
    res.send('logout endpoint from controller');
  },
};
