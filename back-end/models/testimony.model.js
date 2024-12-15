const mongoose = require('mongoose');

const testimonySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true, 
      minlength: [3, 'Title must be at least 3 characters long'],
      maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      minlength: [10, 'Description must be at least 10 characters long'],
      maxlength: [500, 'Description cannot be more than 500 characters'],
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true, 
    },
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model('Testimony', testimonySchema);
