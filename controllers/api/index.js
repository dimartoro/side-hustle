const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const gigRoutes = require('./gigRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/gigs', gigRoutes);

module.exports = router;

module.exports = router;