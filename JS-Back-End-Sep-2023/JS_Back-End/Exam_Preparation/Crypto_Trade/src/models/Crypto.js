const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        // minLength: [2, 'Username must be at least 2 characters!'],
    },
    price: {
        type: Number,
        required: [true, 'Age is required!'],
        // min: [1, 'Age must be at least 1 year!'],
        // max: [100, 'Age must not be more than 100 years!'],
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        // minLength: [5, 'Username must be at least 5 characters!'],
        // maxLength: [50, 'Username must not be more than 50 characters!'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required!'],
        match: [/^((http:\/\/)|(https:\/\/))[\w]+/, 'Image URL must be reffering to actual picture!'],
    },
    paymentMethod: {
        type: String,
        enum: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'],
        required: [true, 'Payment method is required!'],
    },
    buyCrypto: [
        {
            user: {
                type: mongoose.Types.ObjectId,
                ref: 'User',
            }
        }
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
});

const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;