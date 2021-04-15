require('dotenv').config();
module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: 'db',
    dialect: 'mysql',
    timezone: '+09:00',
  },
  test: {
    username: null,
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    timezone: '+09:00',
  },
  production: {
    username: null,
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
    timezone: '+09:00',
  },
};
