const WorkoutExercise = require('../models/workout-exercise.model');
const Workout = require('../models/workout.model');
const Exercise = require('../models/exercise.model');

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

		const newWorkoutExercise = new WorkoutExercise({
			exercise: exerciseId,
		});
		const newWorkoutExerciseResult = await newWorkoutExercise.save();

		// Update the workout with the new exercise
		workout.workoutExercises.push(newWorkoutExerciseResult._id);
		const workoutResult = await workout.save();

		return res.json({ success: true, result: newWorkoutExerciseResult });
	} catch (error) {
		return res
			.status(400)
			.json({ success: false, error: error.toString() });
	}
};

module.exports.delete = async (req, res) => {
	try {
		const workoutExercise = await WorkoutExercise.findById(req.params.id);
		if (!workoutExercise) {
			return res.json({
				success: false,
				result: `WorkoutExercise does not exist.`,
			});
		}

		const result = await WorkoutExercise.deleteOne({
			_id: workoutExercise._id,
		});

		return res.json({ success: true, result });
	} catch (error) {
		return res
			.status(400)
			.json({ success: false, error: error.toString() });
	}
};
