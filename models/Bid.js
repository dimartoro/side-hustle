const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
      allowNull: false,
      references: {
        model: 'gig',
        key: 'id',
      },
    },
    details: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    payment_methods: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bid_amt: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    avail_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    bid_user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'bid',
  }
);

module.exports = Bid;
