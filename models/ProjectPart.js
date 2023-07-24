const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Projectpart extends Model {}

Projectpart.init({
    name:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[1]
        }
    },
    description: {
         type: DataTypes.TEXT,
         allowNull:false,
         validate:{
            len:[1]
        }   
    },
    cost: {
         type: DataTypes.DOUBLE,
         allowNull:false,
        
    },
    time: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            len:[1]
        }
    }
  


},{
    sequelize
});

module.exports=Projectpart