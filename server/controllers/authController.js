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
      // ユーザ仮登録
      const { id } = await models.User.addNewUser(name, email, password);
      // confirmation-token発行
      const confirmationToken = await generateToken(
        { id },
        process.env.JWT_ACCOUNT_ACTIVATION_SECRET,
        '900s',
      );
      // メールアドレスに確認メールを送信
      await sendConfirmationEmail(name, email, confirmationToken);
      return res.json({
        message: 'Confirmation email has been sent',
      });
    } catch (error) {
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

        const { id } = decoded;
        // ユーザ本登録処理
        try {
          const user = await models.User.findByPk(id);
          if (!user) {
            return res.status(400).json({
              error: {
                message: 'Account Activation failed',
                code: 'not_registered',
              },
            });
          }
          if (user.is_verified) {
            return res.status(409).json({
              error: {
                message: 'Account Activation failed',
                code: 'already_verified',
              },
            });
          }
          // 本登録処理
          user.is_verified = true;
          user.save();
          return res.json({ user });
        } catch (error) {
          return res.status(500).json({
            error: {
              message: 'Account Activation failed',
              code: 'internal_error',
            },
          });
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
        return res.status(401).json({
          error: {
            message: 'Login failed',
            code: 'user_not_registered',
          },
        });
      }

      // パスワードの照合
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) {
        return res.status(401).json({
          error: {
            message: 'Login failed',
            code: 'unauthorized',
          },
        });
      }

      // access-tokenの発行
      const accessToken = await generateToken({ id: user.id }, process.env.JWT_SECRET, '7d');
      const { id } = user;
      return res.json({
        accessToken,
        user: { id },
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          message: 'Login failed',
          code: 'internal_error',
        },
      });
    }
  },
};
