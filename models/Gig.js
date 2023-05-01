const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { INTEGER } = require('sequelize');

class Gig extends Model {}

Gig.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    details: {
      type: DataTypes.STRING,
    },
    poster_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    winning_bid_id: {
        type: DataTypes.INTEGER,
    },
    post_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    target_available_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    accept_date: {
        type: DataTypes.DATE,
    },
    complete_date: {
        type: DataTypes.DATE,
    },
    rating:{
      type:DataTypes.INTEGER
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'gig',
  }
);

module.exports = Gig;