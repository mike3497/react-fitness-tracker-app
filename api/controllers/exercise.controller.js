const Exercise = require('../models/exercise.model');

module.exports.create = async (req, res) => {
	try {
		const exercise = new Exercise({
			name: req.body.name,
			category: req.body.category,
		});
		const result = await exercise.save();

		return res.status(200).json(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};

module.exports.read = async (req, res) => {
	try {
		const id = req.params.id;

		const result = await Exercise.findById(id);
		if (!result) {
			return res.status(404).json(`Exercise with id:${id} not found.`);
		}

		return res.status(200).json(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};

module.exports.update = async (req, res) => {
	try {
		const id = req.params.id;

		const exercise = await Exercise.findById(id);
		if (!exercise) {
			return res.status(404).json(`Exercise with id:${id} not found.`);
		}

		exercise.name = req.body.name || exercise.name;
		exercise.category = req.body.category || exercise.category;

		const result = await exercise.save();
		if (!result) {
			return res.status(400).json('Exercise could not be updated');
		}

		return res.status(200).json(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};

module.exports.remove = async (req, res) => {
	try {
		const id = req.params.id;

		const result = await Exercise.deleteOne({ _id: id });
		return res.send(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};

module.exports.exists = async (req, res) => {
	try {
		const id = req.params.id;

		const result = await Exercise.findById(id);
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
		const result = await Exercise.find({}, {}, {}).populate('categories');

		return res.json({ success: true, result });
	} catch (exception) {
		return res
			.status(400)
			.json({ success: false, error: error.toString() });
	}
};
