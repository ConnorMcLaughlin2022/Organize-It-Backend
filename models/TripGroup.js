const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tripgroup extends Model {}

Tripgroup.init({
    // add properites here, ex:
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      }
},{
    sequelize
});

module.exports= Tripgroup