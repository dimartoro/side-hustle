const User = require('./User');
const Gig = require('./Gig');
const Bid = require('./Bid');

Gig.hasMany(Bid, {
  foreignKey: 'gig_id',
});

Bid.belongsTo(Gig, {
  foreignKey: 'gig_id',
});

module.exports = { User, Gig, Bid };
