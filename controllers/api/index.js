const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gigRoutes = require('./gigRoutes');

router.use('/users', userRoutes);
router.use('/gigs', gigRoutes);

module.exports = router;