const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const ProductImage = sequelize.define('ProductImage', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},  
{
  tableName: 'product_image',
  timestamps: true,
});

ProductImage.associate = (models) => {
  ProductImage.belongsTo(models.Product, {
    foreignKey: 'productId',
    as: 'product',
  });
};

module.exports = ProductImage;
