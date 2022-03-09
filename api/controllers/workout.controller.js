const Workout = require('../models/workout.model');

module.exports.create = async (req, res) => {
	try {
		const workout = new Workout({
			startTime: req.body.startTime,
			endTime: req.body.endTime,
			exercises: req.body.exercises,
		});
		const result = await workout.save();

		return res.status(200).json(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};

module.exports.read = async (req, res) => {
	try {
		const id = req.params.id;

		const result = await Workout.findById(id);
		if (!result) {
			return res.status(404).json(`Workout with id:${id} not found.`);
		}

		return res.status(200).json(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};

module.exports.update = async (req, res) => {
	try {
		const id = req.params.id;

		const workout = await Workout.findById(id);
		if (!workout) {
			return res.status(404).json(`Workout with id:${id} not found.`);
		}

		workout.startTime = req.body.startTime || workout.startTime;
		workout.endTime = req.body.endTime || workout.endTime;
		workout.exercises = req.body.exercises || workout.exercises;

		const result = await workout.save();
		if (!result) {
			return res.status(400).json('Workout could not be updated');
		}

		return res.status(200).json(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};

module.exports.remove = async (req, res) => {
	try {
		const id = req.params.id;

		const result = await Workout.deleteOne({ _id: id });
		return res.send(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};

module.exports.exists = async (req, res) => {
	try {
		const id = req.params.id;

		const result = await Workout.findById(id);
		if (!result) {
			return res.status(404).json(false);
		}

		return res.status(200).json(true);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};

module.exports.getAll = async (req, res) => {
	try {
		const result = await Workout.find({}, {}, {});

		return res.status(200).json(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};
