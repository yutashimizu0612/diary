// const mysql = require('mysql2/promise');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./createSequelize');
const bcrypt = require('bcrypt');

// model
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
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

// ユーザの新規登録時、パスワードハッシュ化
User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt();
  user.password = await bcrypt.hash(user.password, salt);
});

// methods
module.exports = {
  findOneUser: async (key, value) => {
    const user = await User.findOne({ where: { [key]: value } });
    return user;
  },

  addNewUser: async (name, email, password) => {
    try {
      const newUser = await User.create({
        name,
        email,
        password,
        auth: false,
      });
      console.log('new user is created.', newUser);
      return newUser;
    } catch (error) {
      console.log('addNewUser Error', error);
      return error;
    }
  },
};
