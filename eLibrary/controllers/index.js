const AuthController = require('./auth.controller');
const BookController = require('./book.controller');
const UserController = require('./user.controller');

module.exports = {
	UserController,
	AuthController,
	BookController,
};
// module.exports = {
// 	AuthController: require('./auth.controller'),
// 	BookController: require('./book.controller'),
// 	UserController: require('./user.controller'),
// };
