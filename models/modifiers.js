'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class modifiers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  modifiers.init(
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'modifiers'
    }
  );
  return modifiers;
};
