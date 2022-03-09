const mongoose = require('mongoose');

const exerciseCategory = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Exercise-Category', exerciseCategory);
