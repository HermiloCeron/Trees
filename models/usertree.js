'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userTree extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  userTree.init({
    userId: DataTypes.INTEGER,
    treeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userTree',
  });
  return userTree;
};