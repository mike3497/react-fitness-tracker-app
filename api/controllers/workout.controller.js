const Workout = require('../models/workout.model');

module.exports.getAll = async (req, res) => {
	try {
		const result = await Workout.find({}, {}, {});

		return res.json({ success: true, result });
	} catch (exception) {
		return res
			.status(400)
			.json({ success: false, error: error.toString() });
	}
};

module.exports.getDetails = async (req, res) => {
	try {
		const workout = await Workout.findOne({ _id: req.params.id }).populate({
			path: 'workoutExercises',
			populate: [
				{
					path: 'exercise',
					populate: {
						path: 'categories',
					},
				},
				{
					path: 'workoutSets',
				},
			],
		});

		return res.json({ success: true, result: workout });
	} catch (error) {
		return res
			.status(400)
			.json({ success: false, error: error.toString() });
	}
};

module.exports.start = async (req, res) => {
	try {
		const workout = new Workout({
			startTime: Date.now(),
		});
		const result = await workout.save();

		return res.json({ success: true, result });
	} catch (error) {
		return res
			.status(400)
			.json({ success: false, error: error.toString() });
	}
};

module.exports.stop = async (req, res) => {
	try {
		const workout = await Workout.findById(req.params.id);
		if (!workout) {
			return res.json({
				success: false,
				result: `Workout does not exist.`,
			});
		}

		if (workout.endTime) {
			return res.json({
				success: false,
				result: 'Workout has already ended.',
			});
		}

		workout.endTime = Date.now();
		workout.inProgress = false;

		const result = await workout.save();
		if (!result) {
			return res.json({ success: false, result });
		}

		return res.json({ success: true, result });
	} catch (error) {
		return res
			.status(400)
			.json({ success: false, error: error.toString() });
	}
};

module.exports.delete = async (req, res) => {
	try {
		const workout = await Workout.findById(req.params.id);
		if (!workout) {
			return res.json({
				success: false,
				result: `Workout does not exist.`,
			});
		}

		const result = await Workout.deleteOne({ _id: workout._id });

		return res.json({ success: true, result });
	} catch (error) {
		return res
			.status(400)
			.json({ success: false, error: error.toString() });
	}
};
