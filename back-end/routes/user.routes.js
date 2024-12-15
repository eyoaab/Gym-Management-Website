const router = require('express').Router();
const userController = require('../controllers/user.controller');

// to create a user
router.post('/', userController.createUser);

// to login a user
router.post('/login', userController.loginUser);

// to get user by id
router.get('/:id', userController.getUserById);

// to update a user
router.put('/:id', userController.updateUser);


module.exports = router;