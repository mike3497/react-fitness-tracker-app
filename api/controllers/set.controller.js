const Set = require('../models/set.model');
const Workout = require('../models/workout.model');
const WorkoutLineItem = require('../models/workout-line-item.model');
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
		const workoutLineItem = await WorkoutLineItem.findOne({
			exercise: exerciseId,
		});

		if (!workoutLineItem) {
			return res.json({
				success: false,
				result: `WorkoutLineItem does not exist with that exercise.`,
			});
		}

		// Create new set
		const set = new Set({
			reps: req.body.reps,
			weight: req.body.weight,
		});
		const setResult = await set.save();

		// Update workout line item with set Id
		workoutLineItem.sets.push(setResult._id);
		const workoutLineItemResult = await workoutLineItem.save();

		return res.json({ success: true, workoutLineItemResult });
	} catch (error) {
		return res
			.status(400)
			.json({ success: false, error: error.toString() });
	}
};
