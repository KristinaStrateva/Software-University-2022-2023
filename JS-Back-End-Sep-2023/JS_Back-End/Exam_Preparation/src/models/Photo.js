const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'Username must be at least 2 characters!'],
    },
    age: {
        type: Number,
        required: [true, 'Age is required!'],
        min: [1, 'Age must be at least 1 year!'],
        max: [100, 'Age must not be more than 100 years!'],
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [5, 'Username must be at least 5 characters!'],
        maxLength: [50, 'Username must not be more than 50 characters!'],
    },
    location: {
        type: String,
        required: [true, 'Location is required!'],
        minLength: [5, 'Username must be at least 5 characters!'],
        maxLength: [50, 'Username must not be more than 50 characters!'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required!'],
        match: [/^((http:\/\/)|(https:\/\/))[\w]+/, 'Image URL must be reffering to actual picture!'],
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    comments: [
        {
            user: {
                type: mongoose.Types.ObjectId,
                ref: 'User',
            },
            comment: {
                type: String,
                required: [true, 'Comment text is required!'],
            }
        },
    ]
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;