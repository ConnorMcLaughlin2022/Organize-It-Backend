const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trippart extends Model {}

Trippart.init({
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
    location: {
         type: DataTypes.STRING,
         allowNull:false,
         validate:{
            len:[1]
        } 
        
    }
  


},{
    sequelize
});

module.exports=Trippart