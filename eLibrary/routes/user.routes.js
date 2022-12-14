const router = require('express').Router();
const { UserController: Controller } = require('../controllers');
const { validateSchema } = require('../middlewares');
const { UserValidationSchema } = require('../validators');

router
	.route('/')
	.get(Controller.getAll)
	.post(validateSchema(UserValidationSchema), Controller.add);

router
	.route('/:id')
	.get(Controller.getOne)
	.patch(validateSchema(UserValidationSchema), Controller.edit)
	.delete(Controller.delete);

module.exports = router;
