const mongoose = require('mongoose');

const workout = mongoose.Schema(
	{
		startTime: {
			type: Date,
			required: true,
		},
		endTime: {
			type: Date,
		},
		workoutExercises: {
			type: [{ type: mongoose.Schema.ObjectId, ref: 'Workout-Exercise' }],
		},
		inProgress: {
			type: Boolean,
			default: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Workout', workout);
