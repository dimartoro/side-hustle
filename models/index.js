 const User = require('./User');
// //const Project = require('./Project');
 const Gig = require('./Gig');
 const Bid = require('./Bid');

User.hasMany(Gig, {
    foreignKey: 'poster_id',
    onDelete: 'CASCADE'
  });
  
  Gig.belongsTo(User, {
    foreignKey: 'poster_id'
  });

  Gig.hasMany(Bid, {
    foreignKey: 'gig_id',
    onDelete: 'CASCADE'
  });
  
  Bid.belongsTo(Gig, {
    foreignKey: 'gig_id'
  });

  User.hasMany(Bid, {
    foreignKey: 'bidder_id',
    onDelete: 'CASCADE'
  });
  
  Bid.belongsTo(User, {
    foreignKey: 'bidder_id'
  });

module.exports = { User, Gig, Bid };
