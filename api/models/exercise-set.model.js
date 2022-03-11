const mongoose = require('mongoose');

const exerciseSet = mongoose.Schema(
	{
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

module.exports = mongoose.model('Exercise-Set', exerciseSet);
