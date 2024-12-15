const mongoose = require('mongoose');

const classSchema = mongoose.Schemas({
    imageUrl:{type: String,
        default:''
    },
    title: {type: String, required: true},
    description: {type: String, required: true},
   trainers:{[type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Author is required'],]},


});