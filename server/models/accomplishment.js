'use strict';
const { Model, Sequelize } = require('sequelize');
const Op = Sequelize.Op;

module.exports = (sequelize, DataTypes) => {
  class Accomplishment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Accomplishment.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
    }
    static getAccomplishmentsByDate(userId, date) {
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
    // TODO
    // 1. key名を'count'ではなく、該当日の日付にしたい
    static getAccomplishmentsCounts(userId, from, to) {
      return this.findAll({
        attributes: [[sequelize.fn('COUNT', sequelize.col('createdAt')), 'count']],
        where: {
          userId,
          createdAt: {
            [Op.gte]: new Date(from + 'T00:00:00+09:00'),
            [Op.lte]: new Date(to + 'T23:59:59+09:00'),
          },
        },
        group: [sequelize.fn('day', sequelize.col('createdAt'))],
      });
    }
  }
  Accomplishment.init(
    {
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      published: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'Accomplishment',
    },
  );
  return Accomplishment;
};
