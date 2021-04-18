'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      comment: {
        type: Sequelize.STRING,
      },
      star: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'Users',
            key: 'id',
          },
        },
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
  },
};
