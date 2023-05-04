const router = require('express').Router();
const { Bid, User, Gig } = require('../../models');
const withAuth = require('../../utils/auth');

//route for posting new bid
// POST JSON body format:
// {
// 	"gig_id": "3",
// 	"details": "I've been hovering since 1969",
// 	"bid_amt": "7000.00",
// 	"avail_date": "2023-08-01 12:12:12",
// 	"bidder_id": "2"
// }
router.post('/', async (req, res) => {
    try {
      var newBid = req.body;
      newBid.bidder_id = req.session.user_id;
      const bid = await Bid.create(newBid);
  
      res.status(200).json(bid);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.put('/:id', withAuth, async (req, res) => {
    try {
      const bid = await Bid.update({
        ...req.body},{
          where:{
            id:req.params.id
          }
      });
  
      res.status(200).json(bid);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  //route for deleting specific bid by id
router.delete('/:id', async (req, res) => {
    try {
      const bidData = await Bid.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!bidData) {
        res.status(404).json({ message: 'No bid found with this id!' });
        return;
      }
  
      res.status(200).json(bidData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  