const router = require('express').Router();

const testimonyController = require('../controllers/testimony.controller');

// to get all testimonies
router.get('/', testimonyController.getAllTestimonies);

// to create a testimony
router.post('/', testimonyController.createTestimony);


module.exports = router;