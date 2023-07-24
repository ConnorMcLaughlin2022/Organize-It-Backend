const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init({
    // add properites here, ex:
    name: {
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
    deadline: {
        type: Datatypes.STRING,
        allowNull:false,
        validate:{
           len:[1]
       } 
    },
    is_Event: {
        type: Datatypes.BOOLEAN,
        defaultValue: true,
    },   
    is_Project: {
        type: Datatypes.BOOLEAN,
        defaultValue: false,
    },   
    is_Trip: {
        type: Datatypes.BOOLEAN,
        defaultValue: false,
    } 
},{
    sequelize
});

module.exports= Event