const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    console.log("555:::", req.body);
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  console.log("111:::", req.body);
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    console.log("2222::User Data:", userData);
    if (!userData) {
      console.log("33333:::", req.body);
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    console.log("4444::Valid Password:", validPassword + ':' + req.body.password + '' + userData.password);

    if (!validPassword) {
      console.log("55555::Password is not valid:", validPassword + ':' + req.body.password + '' + userData.password);
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    console.log("222:Password is good. ::", req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.redirect('/api/gigs');
      //res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
