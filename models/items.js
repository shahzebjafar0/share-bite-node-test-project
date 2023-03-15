'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  items.init(
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: DataTypes.STRING,
      price: DataTypes.FLOAT,
      sec_id: {
        type: DataTypes.INTEGER,
        references: { key: 'id', model: 'sec' }
      }
    },
    {
      sequelize,
      modelName: 'items'
    }
  );
  return items;
};
