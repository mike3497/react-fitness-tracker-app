const WorkoutExercise = require('../models/workout-exercise.model');
const Workout = require('../models/workout.model');
const Exercise = require('../models/exercise.model');
const Set = require('../models/set.model');

module.exports.addExercise = async (req, res) => {
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

		// Find exercise
		const exerciseId = req.params.exerciseId;
		const exercise = await Exercise.findOne({ _id: exerciseId });
		if (!exercise) {
			return res.json({
				success: false,
				result: `Exercise does not exist.`,
			});
		}

		// Find workout line item with that exercise
		const workoutExercise = await WorkoutExercise.findOne({
			exercise: exerciseId,
		});

		if (workoutExercise) {
			return res.json({
				success: false,
				result: `WorkoutExercise already exists with that exercise.`,
			});
		}

		const newWorkoutExercise = new WorkoutExercise({
			exercise: exerciseId,
		});
		const newWorkoutExerciseResult = await newWorkoutExercise.save();

		// Update the workout with the new exercise
		workout.exercises.push(newWorkoutExerciseResult._id);
		const workoutResult = await workout.save();

		return res.json({ success: true, result: newWorkoutExerciseResult });
	} catch (error) {
		return res
			.status(400)
			.json({ success: false, error: error.toString() });
	}
};
