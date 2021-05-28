'use strict';
const { Model, Sequelize } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
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
        attributes: ['id', 'date', 'content', 'published'],
        where: { userId, date },
      });
    }
    static getAccomplishmentsCounts(userId, from, to, order, limit) {
      let queryObject = {
        attributes: ['date', [sequelize.fn('COUNT', sequelize.col('date')), 'count']],
        where: {
          userId,
          date: {
            [Op.gte]: new Date(from),
            [Op.lte]: new Date(to),
          },
        },
        group: ['date'],
      };
      if (order === 'DESC') queryObject.order = sequelize.literal('count DESC');
      if (limit) queryObject.limit = parseInt(limit);
      return this.findAll(queryObject);
    }
  }
  Accomplishment.init(
    {
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
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
  Accomplishment.beforeCreate((accomplishment) => (accomplishment.id = uuidv4()));
  return Accomplishment;
};
