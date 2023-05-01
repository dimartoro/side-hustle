const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { INTEGER } = require('sequelize');

class Bid extends Model {}

Bid.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    gig_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'gig',
        key: 'id',
      },
    },
    details: {
      type: DataTypes.STRING,
    },
    payment_method: {
      type: DataTypes.STRING,
      allowNull:false
    },
    charge: {
        type: DataTypes.DECIMAL,
        allowNull:false
    },
    available_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    bidder_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      }
    },
    bid_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
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
    modelName: 'bid',
  }
);

module.exports = Bid;