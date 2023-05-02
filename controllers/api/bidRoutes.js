const router = require('express').Router();
const { Gig, Bid } = require('../../models');

//route for posting new bid
router.post('/', async (req, res) => {
  try {
    const newBid = await Bid.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBid);
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
        user_id: req.session.user_id,
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
