const WorkoutLineItem = require('../models/workout-line-item.model');

module.exports.create = async (req, res) => {
	try {
		const workoutLineItem = new WorkoutLineItem({
			excercise: req.body.excercise,
			reps: req.body.reps,
			weight: req.body.weight,
		});
		const result = await workoutLineItem.save();

		return res.status(200).json(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};

module.exports.read = async (req, res) => {
	try {
		const id = req.params.id;

		const result = await WorkoutLineItem.findById(id);
		if (!result) {
			return res
				.status(404)
				.json(`WorkoutLineItem with id:${id} not found.`);
		}

		return res.status(200).json(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};

module.exports.update = async (req, res) => {
	try {
		const id = req.params.id;

		const workoutLineItem = await WorkoutLineItem.findById(id);
		if (!workoutLineItem) {
			return res
				.status(404)
				.json(`WorkoutLineItem with id:${id} not found.`);
		}

		workoutLineItem.excercise =
			req.body.excercise || workoutLineItem.excercise;
		workoutLineItem.reps = req.body.reps || workoutLineItem.reps;
		workoutLineItem.exercises = req.body.weight || workoutLineItem.weight;

		const result = await workoutLineItem.save();
		if (!result) {
			return res.status(400).json('WorkoutLineItem could not be updated');
		}

		return res.status(200).json(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};

module.exports.remove = async (req, res) => {
	try {
		const id = req.params.id;

		const result = await WorkoutLineItem.deleteOne({ _id: id });
		return res.send(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};

module.exports.exists = async (req, res) => {
	try {
		const id = req.params.id;

		const result = await WorkoutLineItem.findById(id);
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
		const result = await WorkoutLineItem.find({}, {}, {});

		return res.status(200).json(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};
