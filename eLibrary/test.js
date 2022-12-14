// const sayMyName = (name) => console.log(`Say my name function: -  ${name}`);
// const getMyName = () => {
// 	return new Promise((resolve, reject) => {
// 		// resolve('Seth');
// 		setTimeout(() => resolve('Seth'), 5000);
// 		// reject('Name not found');
// 	});
// };

// // getMyName()
// // 	.then((name) => sayMyName(name))
// // 	.catch((reason) => console.log(reason));

// const printname = async () => {
// 	const name = await getMyName().catch();
// 	sayMyName(name);
// };

// printname();

// // const multiple = (num1, num2) => num1 * num2;
// // const add = (num1, num2) => num1 + num2;
// // const divide = (num1, num2) => num1 / num2;

// // getmyname => 5secs function

// try {
// 	// get the name
// 	const n = getMyName;
// 	// send response to user
// 	res.send(n);
// } catch (error) {}

'use strict';
const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
async function main() {
	// Generate test SMTP service account from ethereal.email
	// Only needed if you don't have a real mail account for testing
	// let testAccount = await nodemailer.createTestAccount();

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: 'smtp.mailtrap.io',
		port: 2525,
		auth: {
			user: '0261f82cbc8cf9',
			pass: '6ddf15b6505f81',
		},
	});

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: '"Fred Foo 👻" <foo@example.com>', // sender address
		to: 'bar@example.com, baz@example.com', // list of receivers
		subject: 'Hello ✔', // Subject line
		text: 'Hello world?', // plain text body
		html: '<b>Hello world?</b>', // html body
	});

	console.log('Message sent: %s', info.messageId);
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	// Preview only available when sending through an Ethereal account
	// console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
