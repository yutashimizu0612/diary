'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    static findUserByEmail(email) {
      return this.findOne({ where: { email } });
    }
    static addNewUser(name, email, password) {
      console.log('new user is created.');
      return this.create({
        name,
        email,
        password,
        admin: false,
      });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
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
      admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  // ユーザの新規登録時、パスワードハッシュ化
  User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    user.id = uuidv4();
  });
  return User;
};
