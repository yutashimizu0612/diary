const models = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { generateToken } = require('../functions/auth/generateToken');
const { sendConfirmationEmail } = require('../functions/auth/sendConfirmationEmail');

require('dotenv').config();

module.exports = {
  signup: async (req, res) => {
    const { name, email, password } = req.body;
    try {
      // 既にメールアドレスが登録されていないかチェック
      const user = await models.User.findUserByEmail(email);
      if (user) {
        return res.status(409).json({
          error: {
            message: 'Signup failed',
            code: 'already_exists',
          },
        });
      }

      // confirmation-token発行
      const confirmationToken = await generateToken(
        // TODO jwtにemailやpasswordを含んで良いのか...?
        { name, email, password },
        process.env.JWT_ACCOUNT_ACTIVATION_SECRET,
        '900s',
      );

      // メールアドレスに確認メールを送信
      await sendConfirmationEmail(res, name, email, confirmationToken);
      return res.json({
        message: 'Confirmation email has been sent',
      });
    } catch (error) {
      console.log('error', error);
      return res.status(500).json({
        error: {
          message: 'Signup failed',
          code: 'internal_error',
        },
      });
    }
  },

  activateAccount: (req, res) => {
    const token = req.body.token;
    if (token) {
      jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION_SECRET, async (error, decoded) => {
        if (error) {
          console.log('ACCOUNT ACTIVATION ERROR', error);
          return res.status(401).json({
            error: {
              message: 'Account Activation failed',
              code: 'unauthorized',
            },
          });
        }

        const { name, email, password } = decoded;
        // ユーザ登録処理
        try {
          const newUser = await models.User.addNewUser(name, email, password);
          return res.json({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
          });
        } catch (error) {
          if (error.parent) {
            if (error.parent.code === 'ER_DUP_ENTRY') {
              return res.status(409).json({
                error: {
                  message: 'Account Activation failed',
                  code: 'already_exists',
                },
              });
            }
          } else {
            return res.status(500).json({
              error: {
                message: 'Account Activation failed',
                code: 'internal_error',
              },
            });
          }
        }
      });
    } else {
      return res.status(400).json({
        error: {
          message: 'Account Activation failed',
          code: 'token_required',
        },
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
