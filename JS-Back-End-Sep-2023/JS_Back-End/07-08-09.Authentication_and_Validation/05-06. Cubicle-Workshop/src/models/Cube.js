const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Cube name is required!'],
        minLength: [5, 'Cube\'s name must be at least 5 characters!'],
        match: [/^[\w\s\']+$/, 'Cube\'s name must be alphanumeric!'],
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [20, 'Description must be at least 20 characters!'],
        match: [/^[^\/\&\$\*<>]+$/, 'Cube\'s description must be alphanumeric!'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required!'],
        match: [/^((http:\/\/)|(https:\/\/))[\w]+/, 'Image URL must be reffering to actual picture!'],
    },
    difficultyLevel: Number,
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory',
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;