'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class treeClimate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  treeClimate.init({
    treeId: DataTypes.INTEGER,
    climateId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'treeClimate',
  });
  return treeClimate;
};