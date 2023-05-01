const { Bid } = require('../models');

const bidData = 
  [
    {
        gig_id: 1,
        details: "I have tranquilizer but would transport via catapult",
        bid_amt: 900.00,
        avail_date: "May 19, 2023 07:00:00",
        bidder_id: 5
    },
    {
        gig_id: 1,
        details: "I can simply teleport it for you.",
        bid_amt: 500.00,
        avail_date: "May 19, 2023 07:00:00",
        bidder_id: 3,
        is_winning_bid: true
    },
    {
        gig_id: 2,
        details: "I represent Jesus; let's talk.",
        bid_amt: 900.00,
        avail_date: "June 5, 2023 01:00:00",
        bidder_id: 6
    },
    {
        gig_id: 2,
        details: "I can show you the Tao de Ching; let's not talk.",
        bid_amt: 300.00,
        avail_date: "June 5, 2023 01:00:00",
        bidder_id: 4
    },
    {
        gig_id: 3,
        details: "I'll make you the the envy of Bike Week.",
        bid_amt: 9000.00,
        avail_date: "May 19, 2023 07:00:00",
        bidder_id: 1
    }
  ]

const seedBids = () => Bid.bulkCreate(bidData);

module.exports = seedBids;
