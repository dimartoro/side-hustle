const User = require('./User');
const Gig = require('./Gig');
const Bid = require('./Bid');

Gig.hasMany(Bid, {
  foreignKey: 'gig_id',
});

Bid.belongsTo(Gig, {
  foreignKey: 'gig_id',
});

User.hasMany(Bid, {
  foreignKey: 'bidder_id',
});

Bid.belongsTo(User, {
  foreignKey: 'bidder_id',
});

User.hasMany(Gig, {
  foreignKey: 'poster_id',
});

Gig.belongsTo(User, {
  foreignKey: 'poster_id',
});


module.exports = { User, Gig, Bid };
