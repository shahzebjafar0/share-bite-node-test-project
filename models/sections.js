'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sections.init(
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'sections'
    }
  );
  return sections;
};
