const Testimony = require('../models/testimony.model');


// to get all testimonies
exports.getAllTestimonies = async (req, res) => {
    try {
        const testimonies = await Testimony.find();
        res.status(200).json(testimonies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// to create  testimoney
exports.createTestimony = async (req, res) => {
    try {
        const testimony = new Testimony(req.body);
        await testimony.save();
        res.status(201).json(testimony);
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ messages });
        }
        res.status(500).json({ message: error.message });
    }
};