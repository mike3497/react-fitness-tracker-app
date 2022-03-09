const mongoose = require('mongoose');

const excercise = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		categories: {
			type: [
				{ type: mongoose.Schema.ObjectId, ref: 'Exercise-Category' },
			],
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Exercise', excercise);
