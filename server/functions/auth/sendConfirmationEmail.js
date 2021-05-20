require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const ejs = require('ejs');
const appRoot = require('app-root-path');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
exports.sendConfirmationEmail = async (name, email, confirmationToken) => {
  try {
    const html = await ejs.renderFile(appRoot + '/views/account-activation-mail.ejs', {
      name,
      link: `${process.env.CLIENT_URL}/activation/${confirmationToken}`,
    });
    const msg = {
      to: email,
      from: process.env.EMAIL_FROM,
      subject: '会員仮登録のお知らせ',
      html: html,
    };
    await sgMail.send(msg);
  } catch (error) {
    throw error;
  }
};
