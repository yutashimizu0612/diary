'use strict';
const { Model, Sequelize } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const Op = Sequelize.Op;

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
    }
    static getPostByDate(userId, date) {
      return this.findOne({
        attributes: ['id', 'comment', 'star'],
        where: { userId, date },
      });
    }
  }
  Post.init(
    {
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        unique: true,
      },
      comment: {
        type: DataTypes.STRING,
      },
      star: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Post',
    },
  );
  Post.beforeCreate((post) => (post.id = uuidv4()));
  return Post;
};
