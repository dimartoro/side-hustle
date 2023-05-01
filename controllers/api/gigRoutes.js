const router = require('express').Router();
const { Gig } = require('../../models');
const withAuth = require('../../utils/auth');

router.put('/', withAuth, async (req, res) => {
  console.log(req.body);
  var gigId = req.body.gigId;
  console.log("111::::", gigId);
  
  //return res.json(req.body);
  try {

    const editGig = await Gig.findByPk({gigId});
    console.log("222::::", editGig);
    //res.status(200).json(editGig);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
