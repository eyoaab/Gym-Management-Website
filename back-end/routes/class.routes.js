const classController = require('../controllers/class.controller');
const router = require('express').Router();

// get all classes
router.get('/', classController.getAllClasses);

// to get class by id
router.get('/:id', classController.getClassById);

// to create a class
router.post('/', classController.createClass);

// to delete a class
router.delete('/:id', classController.deleteClass);

module.exports = router;