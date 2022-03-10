const router = require('express').Router();
const controller = require('../controllers/workout.controller');

router.get('/getAll', (req, res) => {
	controller.getAll(req, res);
});

router.post('/startWorkout', (req, res) => {
	controller.startWorkout(req, res);
});

router.post('/stopWorkout/:id', (req, res) => {
	controller.stopWorkout(req, res);
});

router.get('/getDetails/:id', (req, res) => {
	controller.getDetails(req, res);
});

module.exports = router;
