const Video = require('../models/video.model');


// to get all videos
exports.getAllVideos = async (req, res) => {
    try {
        const videos = await Video.find();
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// to create  video
exports.createVideo = async (req, res) => {
    try {
        const video = new Video(req.body);
        await video.save();
        res.status(201).json(video);
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ messages });
        }
        res.status(500).json({ message: error.message });
    }
};

// to get video by id
exports.getVideoById = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);
        if (!video) return res.status(404).json({ message: 'Video not found' });
        res.status(200).json(video);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// to delete a video
exports.deleteVideo = async (req, res) => {
    try {
        const video = await Video.findByIdAndDelete(req.params.id);
        if (!video) return res.status(404).json({ message: 'Video not found' });
        res.status(200).json({ message: 'Video deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};