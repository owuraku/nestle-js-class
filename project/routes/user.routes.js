const express = require('express');
const router = express.Router();
const { userController } = require('../controllers/user-controller');

router.route('/').get(userController.getAllUsers)
.post(userController.addUserHandler);

router.route('/:id').get(userController.getOneUserHandler)
.patch(userController.editUserHandler)
.put(userController.editUserHandler)
.delete(userController.deleteUserHandler);

module.exports = router;
