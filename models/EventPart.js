const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Eventpart extends Model {}

Eventpart.init({
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
        
    }
  


},{
    sequelize
});

module.exports=Eventpart