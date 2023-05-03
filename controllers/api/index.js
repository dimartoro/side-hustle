const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gigRoutes = require('./gigRoutes');
const bidRoutes = require('./bidRoutes');

router.use('/users', userRoutes);
router.use('/gigs', gigRoutes);
router.use('/bids', bidRoutes);

module.exports = router;