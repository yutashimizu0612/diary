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
        attributes: ['id', 'content', 'published'],
        where: { userId, date },
      });
    }
    static getAccomplishmentsCounts(userId, from, to) {
      console.log('getAccomplishmentsCounts');
      return this.findAll({
        attributes: ['date', [sequelize.fn('COUNT', sequelize.col('date')), 'count']],
        where: {
          userId,
          date: {
            [Op.gte]: new Date(from),
            [Op.lte]: new Date(to),
          },
        },
        group: ['date'],
      });
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
