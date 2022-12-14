const router = require('express').Router();
const { AuthController } = require('../controllers');
const { validateSchema } = require('../middlewares');
const { UserValidationSchema } = require('../validators');

router.post('/login', AuthController.login);
router.post(
	'/register',
	validateSchema(UserValidationSchema),
	AuthController.register
);
router.get('/verify', AuthController.verifyEmail);

module.exports = router;
