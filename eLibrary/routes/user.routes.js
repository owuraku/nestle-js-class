const router = require('express').Router();
const { UserController: Controller } = require('../controllers');

router.route('/').get(Controller.getAll).post(Controller.add);

router
	.route('/:id')
	.get(Controller.getOne)
	.patch(Controller.edit)
	.delete(Controller.delete);

module.exports = router;
