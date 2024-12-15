const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      default: '',
      validate: {
        validator: function (url) {
          return /^https?:\/\/.+$/.test(url) || url === ''; 
        },
        message: 'Invalid URL format',
      },
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minlength: [3, 'Title must be at least 3 characters long'],
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      minlength: [10, 'Description must be at least 10 characters long'],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Author is required'],
    },
    readTime: {
      type: String,
      required: [true, 'Read time is required'],
      trim: true,
      match: [/^\d+ (minute|minutes|hour|hours)$/, 'Read time must be in the format "X minutes" or "X hours"'],
    },
  },
  {
    timestamps: true, 
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model('Blog', blogSchema);
