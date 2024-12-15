const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
  {
    videoUrl: {
      type: String,
      required: [true, 'Video URL is required'],
      match: [/^(https?:\/\/.*\.(?:mp4|avi|mov|mkv|webm))$/i, 'Please provide a valid video URL'],
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true, 
      minlength: [3, 'Title must be at least 3 characters long'],
      maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    owner: {
      type: String,
      required: [true, 'Owner is required'],
      trim: true, 
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Video', videoSchema);
