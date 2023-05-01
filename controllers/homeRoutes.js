const router = require('express').Router();
const { Project, User, Gig, Bid } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const gigData = await Gig.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
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

router.get('/gig/:id', async (req, res) => {
  try {
    const gigData = await Gig.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model:Bid,
          include:[
            {
              model: User,
              attributes: ['username']
            }
          ]
        }
      ],
    });

    const currentUser = await User.findByPk(req.session.user_id);
    var currentUserName = currentUser? currentUser.username:"";
    
    const gig = gigData.get({ plain: true });

    res.render('gig', {
      ...gig,
      logged_in: req.session.logged_in,
      logged_user_id : req.session.user_id,
      logged_user_Name : currentUserName
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
      include:{model:Gig}
      //include: [{ model: Project }],
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

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
