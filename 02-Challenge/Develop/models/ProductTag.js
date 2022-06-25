const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTERGER,
      allowNULL: false,
      primaryKey: true,
      autoIncrement: true
    },
    productID: {
      type: DataTypes.INTERGER,
      refernces: {
        model: 'product',
        key: 'id'
      }
    },

    tagID: {
      type: DataTypes.INTERGER,
      refernces: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
