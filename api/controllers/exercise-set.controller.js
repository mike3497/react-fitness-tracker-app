const ExerciseSet = require('../models/exercise-set.model');
const Workout = require('../models/workout.model');
const WorkoutExercise = require('../models/workout-exercise.model');

module.exports.add = async (req, res) => {
	try {
		// Find workout exercise
		const workoutExercise = await WorkoutExercise.findOne({
			_id: req.params.workoutExerciseId,
		});
		if (!workoutExercise) {
			return res.json({
				success: false,
				result: `WorkoutExercise does not exist..`,
			});
		}

		// Create new exercise set
		const exerciseSet = new ExerciseSet({
			reps: req.body.reps,
			weight: req.body.weight,
		});
		const exerciseSetResult = await exerciseSet.save();

		// Update workout exercise with new exercise set Id
		workoutExercise.exerciseSets.push(exerciseSetResult._id);
		const workoutExerciseResult = await workoutExercise.save();

		return res.json({ success: true, result: exerciseSetResult });
	} catch (error) {
		return res
			.status(400)
			.json({ success: false, error: error.toString() });
	}
};

module.exports.update = async (req, res) => {
	try {
		const exerciseSet = await ExerciseSet.findById(req.params.id);
		if (!exerciseSet) {
			return res.json({
				success: false,
				result: `ExerciseSet does not exist.`,
			});
		}

		exerciseSet.reps = req.body.reps;
		exerciseSet.weight = req.body.weight;

		const result = await exerciseSet.save();
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
		const exerciseSet = await ExerciseSet.findById(req.params.id);
		if (!exerciseSet) {
			return res.json({
				success: false,
				result: `ExerciseSet does not exist.`,
			});
		}

		const result = await ExerciseSet.deleteOne({ _id: exerciseSet._id });

		return res.json({ success: true, result });
	} catch (error) {
		return res
			.status(400)
			.json({ success: false, error: error.toString() });
	}
};
