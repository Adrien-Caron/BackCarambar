const { DataTypes } = require('sequelize');
const db = require('../db/database');

const blagues = db.define(
  'blagues',
  {
 
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    blague: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reponse:{
        type: DataTypes.STRING,
        allowNull: false
    }
    
  },
);

module.exports = blagues;