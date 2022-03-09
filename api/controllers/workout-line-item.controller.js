const WorkoutLineItem = require('../models/workout-line-item.model');
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
		const workoutLineItem = await WorkoutLineItem.findOne({
			exercise: exerciseId,
		});

		if (workoutLineItem) {
			return res.json({
				success: false,
				result: `WorkoutLineItem already exists with that exercise.`,
			});
		}

		const newWorkoutLineItem = new WorkoutLineItem({
			exercise: exerciseId,
		});
		const newWorkoutLineItemResult = await newWorkoutLineItem.save();

		// Update the workout with the new exercise
		workout.exercises.push(newWorkoutLineItemResult._id);
		const workoutResult = await workout.save();

		return res.json({ success: true, newWorkoutLineItemResult });
	} catch (error) {
		return res
			.status(400)
			.json({ success: false, error: error.toString() });
	}
};
