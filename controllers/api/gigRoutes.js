const router = require('express').Router();
const { Gig } = require('../../models');

//route for posting new gig
router.post('/', async (req, res) => {
  try {
    const newGig = await Gig.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newGig);
  } catch (err) {
    res.status(400).json(err);
  }
});

//route for deleting specific Gig by id
router.delete('/:id', async (req, res) => {
  try {
    const gigData = await Gig.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!gigData) {
      res.status(404).json({ message: 'No gig found with this id!' });
      return;
    }

    res.status(200).json(gigData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
