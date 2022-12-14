const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	host: process.env.EMAIL_HOST,
	port: process.env.EMAIL_PORT,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASSWORD,
	},
});

const sendVerficationEmail = async (name, receiverEmail, verificationLink) => {
	await transporter.sendMail({
		from: process.env.EMAIL_FROM,
		to: receiverEmail,
		subject: 'Verify Your Email',
		html: `<p>Hello ${name}</p>, <a href="${verificationLink}">Click here to verify your email</a> or copy and paste this link in your browser ${verificationLink}`,
	});
};

module.exports = {
	sendVerficationEmail,
};
