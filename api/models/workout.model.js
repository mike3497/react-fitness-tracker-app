const mongoose = require('mongoose');

const workout = mongoose.Schema(
	{
		startTime: {
			type: Date,
			required: true,
		},
		endTime: {
			type: Date,
			required: true,
		},
		exercises: {
			type: [String],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Workout', workout);
