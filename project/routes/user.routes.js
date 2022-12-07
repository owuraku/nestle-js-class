const express = require('express');
const router = express.Router();
const { userController } = require('../controllers/user-controller');

router.get('/', userController.getAllUsers);
router.post('/', userController.addUserHandler);
router.get('/:id', userController.getOneUserHandler);
router.patch('/:id', userController.editUserHandler);
router.put('/:id', userController.editUserHandler);
router.delete('/:id', userController.deleteUserHandler);

module.exports = router;
