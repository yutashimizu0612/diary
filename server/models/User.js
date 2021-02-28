// const mysql = require('mysql2/promise');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./createSequelize');

// model
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  auth: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

// methods
exports.test = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

exports.createNewUser = async () => {
  try {
    const user = await User.create({
      name: 'testname',
      email: 'sample@gmail.com',
      password: 'hash',
      auth: false,
    });
    console.log('new user is created.', user);
    return user;
  } catch (error) {
    console.log('error', error);
    return res.status(400).json({ error: error });
  }
};
