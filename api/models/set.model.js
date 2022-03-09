const mongoose = require('mongoose');

const set = mongoose.Schema(
	{
		reps: {
			type: Number,
		},
		weight: {
			type: Number,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Set', set);
