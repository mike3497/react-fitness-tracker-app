const router = require('express').Router();
const controller = require('../controllers/exercise-set.controller');

router.post('/:workoutExerciseId', (req, res) => {
	controller.add(req, res);
});

router.put('/:id', (req, res) => {
	controller.update(req, res);
});

router.delete('/:id', (req, res) => {
	controller.delete(req, res);
});

module.exports = router;
