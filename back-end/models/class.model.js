const mongoose = require('mongoose');

const classSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      default: '',
      match: [/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|svg))$/i, 'Please provide a valid image URL']
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    trainers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'At least one trainer is required'],
    }],
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model('Class', classSchema);
