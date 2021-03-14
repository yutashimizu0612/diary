const models = require('../models');
const { generateToken } = require('../functions/auth/generateToken');
const { sendConfirmationEmail } = require('../functions/auth/sendConfirmationEmail');

require('dotenv').config();

// TODO:DB接続を行うメソッド群を別ファイルに切り出したい
const findOneUser = async (key, value) => {
  const user = await models.User.findOne({ where: { [key]: value } });
  return user;
};

const addNewUser = async (name, email, password) => {
  try {
    const newUser = await models.User.create({
      name,
      email,
      password,
      auth: false,
    });
    console.log('new user is created.');
    return newUser;
  } catch (error) {
    console.log('addNewUser Error', error);
    return error;
  }
};

module.exports = {
  signup: async (req, res) => {
    const { name, email, password } = req.body;
    // 既にユーザ名が登録済みの場合
    try {
      const user = await findOneUser('name', name);
      if (user) {
        // TODO：エラーメッセージ検討
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
      const user = await findOneUser('email', email);
      if (user) {
        return res.status(400).json({
          error: 'このメールアドレスは既に登録されています。',
        });
      }
    } catch (error) {
      console.log('findUserEmail error', error);
      return res.status(400).json({ error: error });
    }
    // confirmation-token発行
    const confirmationToken = await generateToken(
      { name },
      process.env.JWT_ACCOUNT_CONFIRMATION,
      '600s',
    );
    // メールアドレスに確認メールを送信
    try {
      await sendConfirmationEmail(res, email, confirmationToken);
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
    // 確認メールに添付のurlを押下したら、ユーザ登録完了（アクティベーション）

    // ユーザ登録
    // try {
    //   const newUser = await addNewUser(name, email, password);
    //   console.log('newUser', newUser);
    //   return res.redirect(301, '/');
    // } catch (error) {
    //   console.log('signup error', error);
    //   return res.status(400).json({ error: error });
    // }
  },

  login: (req, res) => {
    res.send('login endpoint from controller');
  },

  logout: (req, res) => {
    res.send('logout endpoint from controller');
  },
};
