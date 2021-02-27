const { createNewUser, test } = require('../models/Auth');

exports.signup = (req, res) => {
  createNewUser();
};

exports.login = (req, res) => {
  res.send('login endpoint from controller');
};

exports.logout = (req, res) => {
  res.send('logout endpoint from controller');
};
