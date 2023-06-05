const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Image = sequelize.define('Image', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  altText: {
    type: DataTypes.STRING,
  },
});

module.exports = Image;
