const mongoose = require('mongoose');

const workoutExercise = mongoose.Schema(
	{
		exercise: {
			type: mongoose.Schema.ObjectId,
			ref: 'Exercise',
			required: true,
		},
		exerciseSets: {
			type: [{ type: mongoose.Schema.ObjectId, ref: 'ExerciseSets' }],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Workout-Exercise', workoutExercise);
