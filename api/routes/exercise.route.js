const router = require('express').Router();
const controller = require('../controllers/exercise.controller');

router.post('/create', (req, res) => {
	controller.create(req, res);
});

router.get('/read/:id', (req, res) => {
	controller.read(req, res);
});

router.put('/update/:id', (req, res) => {
	controller.update(req, res);
});

router.delete('/delete/:id', (req, res) => {
	controller.remove(req, res);
});

router.get('/exists/:id', (req, res) => {
	controller.exists(req, res);
});

router.get('/getAll', (req, res) => {
	controller.getAll(req, res);
});

module.exports = router;
