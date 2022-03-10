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
		exercises: {
			type: [
				{ type: mongoose.Schema.ObjectId, ref: 'Workout-Line-Item' },
			],
		},
		inProgress: {
			type: Boolean,
			default: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Workout', workout);
