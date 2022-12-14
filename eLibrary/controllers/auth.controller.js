const { User } = require('../models');
const jwt = require('jsonwebtoken');
const { verifyCredentialsAndReturnUser } = require('../models/user.model');
const { generateToken } = require('../utils');
const { sendVerficationEmail } = require('../email');

class AuthController {
	async login(req, res) {
		// take credentials from request
		try {
			const { email, password } = req.body;
			const user = await verifyCredentialsAndReturnUser(email, password);
			console.log(user);
			if (!user) throw Error();
			const accessToken = generateToken(user);
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

			const verificationToken = generateToken(savedUser.email);
			const verificationUrl = `${process.env.APP_URL}/auth/verify?token=${verificationToken}`;
			sendVerficationEmail(
				savedUser.name,
				savedUser.email,
				verificationUrl
			);
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

	async verifyEmail(req, res) {
		try {
			const { token } = req.query;
			const decodedEmail = jwt.verify(token, process.env.SECRET_KEY);
			await User.findOneAndUpdate(
				{ email: decodedEmail },
				{ verified: true }
			);
			res.send({ message: 'Email verified' });
		} catch (error) {
			return res.status(400).send({ message: 'Invalid token' });
		}
	}
}

module.exports = new AuthController();
