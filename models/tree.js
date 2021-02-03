'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tree extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tree.belongsToMany(models.user, {
        through: "userTree",
        foreignKey: "treeId",
        otherKey: "userId",
      });
      // define association here
    }
  };
  Tree.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    height: DataTypes.STRING,
    deciduous: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tree',
  });
  return Tree;
};