const ExerciseCategory = require('../models/exercise-category.model');

module.exports.create = async (req, res) => {
	try {
		const exerciseCategory = new ExerciseCategory({
			name: req.body.name,
		});
		const result = await exerciseCategory.save();

		return res.status(200).json(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};

module.exports.read = async (req, res) => {
	try {
		const id = req.params.id;

		const result = await ExerciseCategory.findById(id);
		if (!result) {
			return res
				.status(404)
				.json(`ExerciseCategory with id:${id} not found.`);
		}

		return res.status(200).json(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};

module.exports.update = async (req, res) => {
	try {
		const id = req.params.id;

		const exerciseCategory = await ExerciseCategory.findById(id);
		if (!exerciseCategory) {
			return res
				.status(404)
				.json(`ExerciseCategory with id:${id} not found.`);
		}

		exerciseCategory.name = req.body.name || exerciseCategory.name;

		const result = await exerciseCategory.save();
		if (!result) {
			return res
				.status(400)
				.json('ExerciseCategory could not be updated');
		}

		return res.status(200).json(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};

module.exports.remove = async (req, res) => {
	try {
		const id = req.params.id;

		const result = await ExerciseCategory.deleteOne({ _id: id });
		return res.send(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};

module.exports.exists = async (req, res) => {
	try {
		const id = req.params.id;

		const result = await ExerciseCategory.findById(id);
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
		const result = await ExerciseCategory.find({}, {}, {});

		return res.status(200).json(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};
