const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gig extends Model {}

Gig.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    details: {
      type: DataTypes.STRING,
      allowNull: false
    },
    poster_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    poster_rating: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    bidder_rating: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    target_avail_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    win_bid_date: {
      type: DataTypes.DATE
    },
    complete_date: {
      type: DataTypes.DATE
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'gig'
  }
);

module.exports = Gig;
