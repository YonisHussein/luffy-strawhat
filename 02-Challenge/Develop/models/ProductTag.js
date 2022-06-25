const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    productID: {
      type: DataTypes.INTERGER,
      allowNULL: false,
      primaryKey: true,
      autoIncrement: true
    },

    tagID: {
      type: DataTypes.INTERGER,
      allowNULL: false
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
