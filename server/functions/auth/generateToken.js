require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.generateToken = async (payload, secret, period) => {
  const token = jwt.sign(payload, secret, {
    expiresIn: period,
  });
  return token;
};
