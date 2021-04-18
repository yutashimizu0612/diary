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
      return this.findAll({
        where: {
          userId,
          createdAt: {
            // ('2004-04-01T00:00:01+09:00')
            [Op.gte]: new Date(date + 'T00:00:00+09:00'),
            [Op.lte]: new Date(date + 'T23:59:59+09:00'),
          },
        },
      });
    }
  }
  Post.init(
    {
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
