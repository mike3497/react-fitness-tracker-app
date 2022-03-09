const mongoose = require('mongoose');

const workoutLineItem = mongoose.Schema(
	{
		exercise: {
			type: mongoose.Schema.ObjectId,
			ref: 'Exercise',
			required: true,
		},
		sets: {
			type: [{ type: mongoose.Schema.ObjectId, ref: 'Set' }],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Workout-Line-Item', workoutLineItem);
