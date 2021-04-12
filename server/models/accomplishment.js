'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accomplishment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Accomplishment.belongsTo(models.User);
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
