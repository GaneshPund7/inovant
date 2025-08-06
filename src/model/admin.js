const DataTypes = require('sequelize');
const sequelize = require('../config/db');

const Admin = sequelize.define('Admin',{

    adminName: {
     type : DataTypes.STRING,
     allowNull: false
    },
    email: {
     type : DataTypes.STRING,
     allowNull: false
    },
    mobile: {
        type: DataTypes.INTEGER
    },
 address:{
        type: DataTypes.TEXT,
        allowNull: true,

    },
    password: {
     type : DataTypes.STRING,
     allowNull: false
    },
   

}, 
 {
    tableName: 'admin',
    timestamps: true
 })
Admin.associate = (models) => {
  
};
module.exports = Admin