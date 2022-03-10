const Set = require('../models/set.model');
const Workout = require('../models/workout.model');
const WorkoutExercise = require('../models/workout-exercise.model');
const Exercise = require('../models/exercise.model');

module.exports.addSet = async (req, res) => {
	try {
		// Find workout
		const workoutId = req.params.workoutId;
		const workout = await Workout.findOne({ _id: workoutId });
		if (!workout) {
			return res.json({
				success: false,
				result: `Workout does not exist.`,
			});
		}

		// Find workout line item with that exercise
		const exerciseId = req.params.exerciseId;
		const workoutExercise = await WorkoutExercise.findOne({
			exercise: exerciseId,
		});

		if (!workoutExercise) {
			return res.json({
				success: false,
				result: `WorkoutExercise does not exist with that exercise.`,
			});
		}

		// Create new set
		const set = new Set({
			reps: req.body.reps,
			weight: req.body.weight,
		});
		const setResult = await set.save();

		// Update workout line item with set Id
		workoutExercise.sets.push(setResult._id);
		const workoutExerciseResult = await workoutExercise.save();

		return res.json({ success: true, result: workoutExerciseResult });
	} catch (error) {
		return res
			.status(400)
			.json({ success: false, error: error.toString() });
	}
};
