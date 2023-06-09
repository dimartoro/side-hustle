const router = require('express').Router();
const { User, Gig, Bid } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render('homepage',{
    logged_in: req.session.logged_in 
  });
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include:{model:Gig, include:{model:Bid}},
      order:[[Gig,'target_avail_date', 'ASC']]
    });

    const user = userData.get({ plain: true });


    console.log("USERUSERUSEDF" ,user);
    
    
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/api/gigs');
    return;
  }
  res.render('login', {
    is_login: true
  });
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/api/gigs');
    return;
  }
  res.render('login', {
    is_login: false
  });
});

module.exports = router;
