const { Gig } = require('../models');

const gigData = 
  [
    {
      title: "Transport my mother's angry rhinocerous",
      details: "Bring your truck and some tranquilizer.",
      poster_id: 4,
      target_avail_date: "May 19, 2023 07:00:00",
      win_bid_date: "April 30, 2023 14:26:49"
    },
    {
      title: "Pressure wash my soul",
      details: "Disclaimer: It's pretty dirty.",
      poster_id: 5,
      target_avail_date: "June 5, 2023 01:00:00"
    },
    {
      title: "Convert my motorcycle into a hovercraft",
      details: "I need to hover and you know how.",
      poster_id: 2,
      target_avail_date: "August 10, 2023 19:00:00"
    }
  ]

const seedGigs = () => Gig.bulkCreate(gigData);

module.exports = seedGigs;
