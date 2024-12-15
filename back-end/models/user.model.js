const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, 'Invalid email format'], 
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters long'],
    },
    profileImage: {
      type: String,
      default: '',
    },
    socialLinks: {
      type: [String],
      default: [],
      validate: {
        validator: function (links) {
          return links.every(link => /^https?:\/\/.+/.test(link)); 
        },
        message: 'All social links must be valid URLs',
      },
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }, 
    toObject: { virtuals: true },
  }
);


const User = mongoose.model('User', userSchema);

module.exports = User;
