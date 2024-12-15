const router = require('express').Router();
const videoController = require('../controllers/video.controller');

// get all videos
router.get('/', videoController.getAllVideos);

// to get video by id
router.get('/:id', videoController.getVideoById);

// to create a video
router.post('/', videoController.createVideo);

// to delete a video
router.delete('/:id', videoController.deleteVideo);


module.exports = router;

