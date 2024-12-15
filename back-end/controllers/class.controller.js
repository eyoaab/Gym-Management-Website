const Class = require('../models/class.model');

// to get all classes
exports.getAllClasses = async (req, res) => {
    try {
        const classes = await Class.find().populate('trainer');
        res.status(200).json(classes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// to get class by id
exports.getClassById = async (req, res) => {
    try {
        const classObj = await Class.findById(req.params.id).populate('trainer');
        if (!classObj) return res.status(404).json({ message: 'Class not found' });
        res.status(200).json(classObj);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// to cerete a class
exports.createClass = async (req, res) => {
    try {
        const classObj = new Class(req.body);
        await classObj.save();
        res.status(201).json(classObj);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// to delete a class

exports.deleteClass = async (req, res) => {
    try {
        const classObj = await Class.findByIdAndDelete(req.params.id);
        if (!classObj) return res.status(404).json({ message: 'Class not found' });
        res.status(200).json({ message: 'Class deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};