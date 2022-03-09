const mongoose = require('mongoose');

const excercise = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		category: {
			type: [String],
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Exercise', excercise);
