const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { User } = require('.');

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		required: true,
		default: 'user',
	},
});

UserSchema.path('password').set(function (plainPassword) {
	const salt = bcrypt.genSaltSync(10);
	const hashed = bcrypt.hashSync(plainPassword, salt);
	return hashed;
});

//  set a static function on the model
UserSchema.statics.verifyCredentialsAndReturnUser = async function (
	email,
	password
) {
	try {
		const user = await this.findOne({ email });
		if (!user) return null;
		const isPasswordCorrect = await bcrypt.compare(password, user.password);
		const userData = user.toJSON();
		delete userData.password;
		return isPasswordCorrect ? userData : null;
	} catch (error) {
		console.log(error);
		return null;
	}
};

const verifyCredentialsAndReturnUser = async (email, password) => {
	try {
		const user = await mongoose.model('user').findOne({ email });
		if (!user) return null;
		const isPasswordCorrect = await bcrypt.compare(password, user.password);
		const userData = user.toJSON();
		delete userData.password;
		return isPasswordCorrect ? userData : null;
	} catch (error) {
		console.log(error);
		return null;
	}
};

// UserSchema.pre('save', function (next, done) {});

module.exports.default = mongoose.model('user', UserSchema);
module.exports = { verifyCredentialsAndReturnUser };
