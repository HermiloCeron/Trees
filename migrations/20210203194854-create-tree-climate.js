'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('treeClimates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      treeId: {
        type: Sequelize.INTEGER
      },
      climateId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    },
      {
        uniqueKeys: {
            actions_unique: {
                fields: ['treeId', 'climateId']
            }
        }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('treeClimates');
  }
};