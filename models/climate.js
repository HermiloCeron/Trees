'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class climate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      climate.belongsToMany(models.Tree, {
        through: "treeClimate",
        foreignKey: "climateId",
        otherKey: "treeId",
      });
      // define association here
    }
  };
  climate.init({
    name: DataTypes.STRING,
    temperature: DataTypes.STRING,
    humidity: DataTypes.STRING,
    wind: DataTypes.STRING,
    altitude: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'climate',
  });
  return climate;
};