const DataTypes = require('sequelize');
const sequelize = require('../../config/db');

const User = sequelize.define('User',{

    userName: {
     type : DataTypes.STRING,
     allowNull: false
    },
    email: {
     type : DataTypes.STRING,
     allowNull: false
    },
    mobile: {
        type: DataTypes.STRING
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
    tableName: 'user',
    timestamps: true
 })
User.associate = (models) => {
  
};
module.exports = User