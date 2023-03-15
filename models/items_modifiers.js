'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class items_modifiers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  items_modifiers.init(
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      item_id: {
        type: DataTypes.INTEGER,
        references: { model: 'item', key: 'id' }
      },
      modifier_id: {
        type: DataTypes.INTEGER,
        references: { model: 'mod', key: 'id' }
      }
    },
    {
      sequelize,
      modelName: 'items_modifiers'
    }
  );
  return items_modifiers;
};
