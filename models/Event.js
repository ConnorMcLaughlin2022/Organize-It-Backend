const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init({
    // add properites here, ex:
    name: {
        type: DataTypes.String,
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
    deadline: {
        type: Datatypes.String,
        allowNull:false,
        validate:{
           len:[1]
       } 
    }
},{
    sequelize
});

module.exports= Event