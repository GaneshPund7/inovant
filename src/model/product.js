const DataTypes = require('sequelize');
const sequelize = require('../../config/db');

const Product = sequelize.define('Product',{

     sku: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
    productName: {
     type : DataTypes.STRING,
     allowNull: false
    },
    price: {
     type : DataTypes.INTEGER,
     allowNull: false
    },
   
}, 
 {
    tableName: 'product',
    timestamps: true
 })
Product.associate = (models) => {
  Product.hasMany(models.ProductImage, {
    foreignKey: 'productId',
    as: 'images',
  });
};
module.exports = Product