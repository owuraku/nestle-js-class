const { User } = require('../models');
const jwt = require('jsonwebtoken');
const { verifyCredentialsAndReturnUser } = require('../models/user.model');

class AuthController {
	async login(req, res) {
		// take credentials from request
		try {
			const { email, password } = req.body;
			const user = await verifyCredentialsAndReturnUser(email, password);
			console.log(user);
			if (!user) throw Error();
			const accessToken = jwt.sign(user, process.env.SECRET_KEY, {
				expiresIn: process.env.JWT_EXPIRES,
			});
			res.send({
				accessToken,
				message: 'Login successful',
			});
		} catch (error) {
			console.error(error);
			return res.status(400).send({
				message: 'Invalid credentials',
			});
		}
		// if user verification fails

		//  verify that the credentials are correct
		// send a token if it is
	}

	async register(req, res) {
		// take user details from request
		const { name, email, password } = req.body;
		try {
			const user = new User({ name, email, password });
			const savedUser = await user.save();
			delete savedUser.password;
			res.send({ message: 'registration successful', data: savedUser });
		} catch (error) {
			console.log(error);
			res.status(400).send({ message: 'unable to register' });
		}

		// hash password
		// send a token if it is
	}

	async changePassword(req, res) {}

	async resetPassword(req, res) {}
}

module.exports = new AuthController();
