const models = require('../models');
const sgMail = require('@sendgrid/mail');

require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
    const msg = {
      to: email,
      from: process.env.EMAIL_FROM, // Use the email address or domain you verified above
      subject: '会員仮登録のお知らせ',
      html: `
        <p>仮登録いただき、誠にありがとうございます。</p>
        <br />
        <p>下記のURLにアクセスし、本登録をお願いいたします。</p>
        <p>（なお、30分以内に本登録されない場合は、無効となります。お手数ですが、再度登録手続きをしてください。）</p>
        <br />
        <p>＜本登録用URL＞</p>
        <p>${process.env.CLIENT_URL}/auth/confirmation</p>
      `,
    };
    try {
      await sgMail.send(msg);
      return res.json({
        message: `Email has been sent to ${email}. Follow the instruction to activate your account.`,
      });
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
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
