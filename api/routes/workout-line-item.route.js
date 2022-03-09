const router = require('express').Router();
const controller = require('../controllers/workout-line-item.controller');

router.post('/addExercise/:workoutId/:exerciseId', (req, res) => {
	controller.addExercise(req, res);
});

module.exports = router;
