const User = require('./User');
const Gig = require('./Gig');
const Bid = require('./Bid');

Gig.hasMany(Bid, {
  foreignKey: 'gig_id',
});

Bid.belongsTo(Gig);

User.hasMany(Bid, {
  foreignKey: 'bidder_id',
});

Bid.belongsTo(User);

User.hasMany(Gig, {
  foreignKey: 'poster_id',
});

Gig.belongsTo(User);


module.exports = { User, Gig, Bid };
