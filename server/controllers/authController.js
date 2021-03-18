const models = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { generateToken } = require('../functions/auth/generateToken');
const { sendConfirmationEmail } = require('../functions/auth/sendConfirmationEmail');

require('dotenv').config();

// TODO:DB接続を行うメソッド群を別ファイルに切り出したい
const findUserByEmail = async (email) => {
  try {
    const user = await models.User.findOne({ where: { email } });
    return user;
  } catch (error) {
    throw error;
  }
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
    if (error.parent.code === 'ER_DUP_ENTRY') {
      throw 'DuplicateEntryException';
    } else {
      throw error;
    }
  }
};

module.exports = {
  signup: async (req, res) => {
    const { name, email, password } = req.body;
    try {
      // 既にメールアドレスが登録されていないかチェック
      const user = await findUserByEmail(email);
      if (user) {
        return res.status(400).json({
          error: 'このメールアドレスは既に登録されています。',
        });
      }

      // confirmation-token発行
      const confirmationToken = await generateToken(
        // TODO jwtにemailやpasswordを含んで良いのか...?
        { name, email, password },
        process.env.JWT_ACCOUNT_CONFIRMATION,
        '900s',
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
    } catch (error) {
      console.log('error', error);
      return res.status(400).json({ error: error });
    }
  },

  activateAccount: (req, res) => {
    const token = req.query.confirmation_token;
    if (token) {
      jwt.verify(token, process.env.JWT_ACCOUNT_CONFIRMATION, async (error, decoded) => {
        if (error) {
          console.log('ACCOUNT ACTIVATION ERROR', error);
          return res.status(401).json({
            error: '再度登録画面からやり直してください。',
          });
        }

        const { name, email, password } = decoded;
        // ユーザ登録処理
        try {
          const newUser = await addNewUser(name, email, password);
          console.log('newUser', newUser);
          return res.redirect(301, '/');
        } catch (error) {
          switch (error) {
            case 'DuplicateEntryException':
              console.log('SIGNUP ERROR DUPLICATE ENTRY', error);
              return res.status(400).json({
                error: '既に登録されています。ログイン画面からログインしてください。',
              });
            default:
              console.log('SIGNUP ERROR', error);
              return res.status(400).json({
                error: '登録に失敗しました。再度登録画面からやり直してください。',
              });
          }
        }
      });
    } else {
      return res.json({
        message: 'お手数ですが、再度登録画面からやり直してください。',
      });
    }
  },

  login: async (req, res) => {
    try {
      const user = await findUserByEmail(req.body.email);
      // ユーザが登録されていない場合
      if (!user) {
        return res.status(400).json({
          error: 'このメールアドレスは登録されていません。',
        });
      }

      // パスワードの照合
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) {
        return res.status(400).json({ error: 'メールアドレスかパスワードが間違っています。' });
      }

      // access-tokenの発行
      const accessToken = await generateToken({ id: user.id }, process.env.JWT_SECRET, '900s');
      const { id, name, email, auth } = user;
      return res.json({
        accessToken,
        user: { id, name, email, auth },
      });
    } catch (error) {
      console.log('LOGIN ERROR', error);
      return res.status(400).json({
        error: 'ログインに失敗しました。',
      });
    }
  },

  logout: (req, res) => {
    res.send('logout endpoint from controller');
  },
};
