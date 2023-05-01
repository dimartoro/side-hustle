const router = require('express').Router();
const { Gig, Bid, User } = require('../models');
const withAuth = require('../utils/auth');

//get at the root finds all Gigs and renders them to the homepage view
router.get('/', async (req, res) => {
  try {
    // Get all gigs and JOIN with user data
    const gigData = await Gig.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const gigs = gigData.map((gig) => gig.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      gigs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/gigs/:id', async (req, res) => {
    try {
      const gigData = await Gig.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      const gig = gigData.get({ plain: true });
  
      res.render('project', {
        ...gig,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Use withAuth middleware to prevent access to route
  router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Gig }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


//get at /login checks if sessions is logged in to direct them to the /profile page, if not, goto /login
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;
  