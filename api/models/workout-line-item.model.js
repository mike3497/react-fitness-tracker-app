const mongoose = require('mongoose');

const workoutLineItem = mongoose.Schema(
	{
		exercise: {
			type: String,
			required: true,
		},
		reps: {
			type: Number,
			required: true,
		},
		weight: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Workout-Line-Item', workoutLineItem);
