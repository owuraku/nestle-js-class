const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const BookSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	volume: {
		type: String,
	},
	category: {
		type: String,
	},
	filePath: {
		type: String,
	},
});

// BookSchema.path('name').set(function (a) {
// 	const salt = bcrypt.genSaltSync(10);
// 	const hashed = bcrypt.hashSync(a, salt);
// 	return hashed;
// });

module.exports = mongoose.model('book', BookSchema);
