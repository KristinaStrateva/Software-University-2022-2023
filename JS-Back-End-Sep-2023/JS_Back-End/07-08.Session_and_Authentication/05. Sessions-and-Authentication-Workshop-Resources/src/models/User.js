const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        validate: {
            validator: function (value) {
                return value.length >= 6 && value.length <= 15;
            },
            message: 'Username must be 6 to 15 characters!',
        }
    },
    password: {
        type: String,
        // validate: {
        //     validator: function (value) {
        //         return this.repeatPassword === value;
        //     },
        //     message: 'Passwords don\'t match!',
        // }
    },
});

userSchema.virtual('repeatPassword')
    .set(function (value) {
        if (value !== this.password) {
            throw new mongoose.MongooseError('Passwords don\'t match!');
        }
    });

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

const User = mongoose.model('User', userSchema);

module.exports = User;