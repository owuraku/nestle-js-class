const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		select: false,
	},
	role: {
		type: String,
		required: true,
		default: 'user',
	},
	verified: {
		type: Boolean,
		required: true,
		default: false,
	},
	verificationDate: {
		type: Date,
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
		const user = await this.findOne({ email }).select('+password');
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

UserSchema.statics.findByEmail = async function (email) {
	return await this.findOne({ email });
};

// const verifyCredentialsAndReturnUser = async (email, password) => {
// 	try {
// 		const user = await mongoose.model('user').findOne({ email });
// 		if (!user) return null;
// 		const isPasswordCorrect = await bcrypt.compare(password, user.password);
// 		const userData = user.toJSON();
// 		delete userData.password;
// 		return isPasswordCorrect ? userData : null;
// 	} catch (error) {
// 		console.log(error);
// 		return null;
// 	}
// };

// UserSchema.pre('save', function (next, done) {});

module.exports = mongoose.model('user', UserSchema);
// module.exports = { verifyCredentialsAndReturnUser };
