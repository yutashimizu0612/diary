require('dotenv').config();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendConfirmationEmail = async (res, email, confirmationToken) => {
  const msg = {
    to: email,
    from: process.env.EMAIL_FROM,
    subject: '会員仮登録のお知らせ',
    html: `
      <p>仮登録いただき、誠にありがとうございます。</p>
      <br />
      <p>下記のURLにアクセスし、本登録をお願いいたします。</p>
      <p>（なお、30分以内に本登録されない場合は、無効となります。お手数ですが、再度登録手続きをしてください。）</p>
      <br />
      <p>＜本登録用URL＞</p>
      <p>${process.env.CLIENT_URL}/auth/confirmation/${confirmationToken}</p>
    `,
  };
  await sgMail.send(msg);
  return res.json({
    message: `Email has been sent to ${email}. Follow the instruction to activate your account.`,
  });
};
