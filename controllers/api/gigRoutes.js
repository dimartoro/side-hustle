const router = require('express').Router();
const { Gig, User, Bid } = require('../../models');
const withAuth = require('../../utils/auth');

//This route is used to return the list of Gigs
router.get('/', withAuth, async (req, res) => {
  if(req.session.logged_in ){
    try {
        const gigData = await Gig.findAll({
          // where:{win_bid_date:null},
          include: [
            {
              model: User,
              attributes: ['username'],
            },
            {
              model:Bid
            }
          ],
          order:[['target_avail_date', 'ASC']],
        });
        
        // Serialize data so the template can read it
        const gigs = gigData.map((gig) => gig.get({ plain: true }));
        console.log(gigs);
        // Pass serialized data and session flag into template
        res.render('gigs', { 
          gigs, 
          logged_in: req.session.logged_in 
        });
      } catch (err) {
        res.status(500).json(err);
      }
    }
    else{
      res.redirect('/login');
      return;
    }
});

router.get('/:id/bid', withAuth, async (req, res) => {
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
    console.log(gig);

    res.render('bid', {
      ...gig,
      logged_in: req.session.logged_in,
      logged_user_id : req.session.user_id,
      logged_user_Name : currentUserName
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
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
    const activeBidButtons = gig.win_bid_date == null;

    res.render('gig', {
      ...gig,
      logged_in: req.session.logged_in,
      logged_user_id : req.session.user_id,
      logged_user_Name : currentUserName,
      activeBidButtons : activeBidButtons
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


//Create new GIG is working now! - post - receiving the input data - create new gig in gigs list
router.post('/', withAuth, async (req, res) => {
  try {
    const newGig = await Gig.create({
      ...req.body,
      poster_id: req.session.user_id,
    });

    res.status(200).json(newGig);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const gig = await Gig.update({
      ...req.body},{
        where:{
          id:req.params.id
        }
    });

    res.status(200).json(gig);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const gigData = await Gig.destroy({
      where: {
        id: req.params.id,
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