const router = require('express').Router();
const { BookController: Controller } = require('../controllers');
const { validateSchema, validateMongoId } = require('../middlewares');
const { BookValidationSchema } = require('../validators');

router
	.route('/')
	.get(Controller.getAll)
	.post(validateSchema(BookValidationSchema), Controller.add);

router
	.route('/:id')
	.all(validateMongoId())
	.get(Controller.getOne)
	.patch(Controller.edit)
	.put(Controller.edit)
	.delete(Controller.delete);

// router.get('/', Controller.getAll);
// router.post('/', Controller.add);
// router.get('/:id', Controller.getOne);

module.exports = router;
