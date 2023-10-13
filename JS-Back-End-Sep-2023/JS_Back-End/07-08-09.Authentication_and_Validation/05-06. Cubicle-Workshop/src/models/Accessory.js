const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Accessory name is required!'],
        minLength: [5, 'Accessory\'s name must be at least 5 characters!'],
        match: [/^[\w\s\']+$/, 'Accessory\'s name must be alphanumeric!'],
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [20, 'Description must be at least 20 characters!'],
        match: [/^[^\/\&\$\*<>]+$/, 'Accessory\'s description must be alphanumeric!'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required!'],
        match: [/^((http:\/\/)|(https:\/\/))[\w]+/, 'Image URL must be reffering to actual picture!'],
    },
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;