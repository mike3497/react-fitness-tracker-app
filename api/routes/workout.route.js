const router = require('express').Router();
const controller = require('../controllers/workout.controller');

router.get('/', (req, res) => {
	controller.getAll(req, res);
});

router.get('/details/:id', (req, res) => {
	controller.getDetails(req, res);
});

router.post('/start', (req, res) => {
	controller.start(req, res);
});

router.put('/stop/:id', (req, res) => {
	controller.stop(req, res);
});

router.delete('/:id', (req, res) => {
	controller.delete(req, res);
});

module.exports = router;
