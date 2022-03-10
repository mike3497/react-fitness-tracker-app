const router = require('express').Router();
const controller = require('../controllers/workout-exercise.controller');

router.post('/exercise/:workoutId/:exerciseId', (req, res) => {
	controller.addExercise(req, res);
});

router.delete('/:id', (req, res) => {
	controller.delete(req, res);
});

module.exports = router;
