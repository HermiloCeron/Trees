'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsToMany(models.Tree, {
        through: "userTree",
        foreignKey: "userId",
        otherKey: "treeId",
      });
      // define association here
    }
  };
  user.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};