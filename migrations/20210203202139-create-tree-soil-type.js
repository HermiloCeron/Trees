'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('treeSoilTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      treeId: {
        type: Sequelize.INTEGER
      },
      soilTypeId: {
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
                fields: ['treeId', 'soilTypeId']
            }
        }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('treeSoilTypes');
  }
};