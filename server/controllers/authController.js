const models = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { generateToken } = require('../functions/auth/generateToken');
const { sendConfirmationEmail } = require('../functions/auth/sendConfirmationEmail');

require('dotenv').config();

module.exports = {
  signup: async (req, res) => {
    const { name, email, password } = req.body;
    console.log('api側のsignup', name, email, password);
    try {
      // 既にメールアドレスが登録されていないかチェック
      const user = await models.User.findUserByEmail(email);
      if (user) {
        return res.status(400).json({
          message: 'このメールアドレスは既に登録されています。',
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
    const token = req.body.token;
    if (token) {
      jwt.verify(token, process.env.JWT_ACCOUNT_CONFIRMATION, async (error, decoded) => {
        if (error) {
          console.log('ACCOUNT ACTIVATION ERROR', error);
          return res.status(401).json({
            message: '再度登録画面からやり直してください。',
          });
        }

        const { name, email, password } = decoded;
        // ユーザ登録処理
        try {
          const newUser = await models.User.addNewUser(name, email, password);
          console.log('newUser', newUser);
          return res.json({
            message: 'ユーザ登録が完了しました。ログインしてください！',
          });
        } catch (error) {
          switch (error.parent.code) {
            case 'ER_DUP_ENTRY':
              console.log('SIGNUP ERROR DUPLICATE ENTRY', error);
              return res.status(400).json({
                message: 'ログイン画面からログインしてください。',
              });
            default:
              console.log('SIGNUP ERROR', error);
              return res.status(400).json({
                message: '登録に失敗しました。再度登録画面からやり直してください。',
              });
          }
        }
      });
    } else {
      return res.status(400).json({
        message: 'お手数ですが、再度登録画面からやり直してください。',
      });
    }
  },

  login: async (req, res) => {
    try {
      const user = await models.User.findUserByEmail(req.body.email);
      // ユーザが登録されていない場合
      if (!user) {
        return res.status(400).json({
          message: 'このメールアドレスは登録されていません。ご利用にはユーザ登録が必要です。',
        });
      }

      // パスワードの照合
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) {
        return res.status(400).json({ message: 'メールアドレスかパスワードが間違っています。' });
      }

      // access-tokenの発行
      const accessToken = await generateToken({ id: user.id }, process.env.JWT_SECRET, '7d');
      const { id } = user;
      return res.json({
        accessToken,
        user: { id },
      });
    } catch (error) {
      console.log('LOGIN ERROR', error);
      return res.status(400).json({
        message: 'ログインに失敗しました。',
      });
    }
  },
};
