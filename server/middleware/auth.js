const expressJwt = require('express-jwt');
require('dotenv').config();

exports.requireLogin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
});
