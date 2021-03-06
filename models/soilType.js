'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class soilType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      soilType.belongsToMany(models.Tree, {
        through: "treeSoilType",
        foreignKey: "soilTypeId",
        otherKey: "treeId",
      });
      // define association here
    }
  };
  soilType.init({
    name: DataTypes.STRING,
    moisture: DataTypes.STRING,
    nutrientContent: DataTypes.STRING,
    soilDepth: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'soilType',
  });
  return soilType;
};