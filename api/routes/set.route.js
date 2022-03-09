const router = require('express').Router();
const controller = require('../controllers/set.controller');

router.post('/addSet/:workoutId/:exerciseId', (req, res) => {
	controller.addSet(req, res);
});

module.exports = router;
