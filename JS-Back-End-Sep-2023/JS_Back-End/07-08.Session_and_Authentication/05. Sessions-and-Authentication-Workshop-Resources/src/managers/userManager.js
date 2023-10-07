const bcrypt = require('bcrypt');

const User = require('../models/User');
const jwt = require('../lib/jwt');

const SECRET = '9b42ee31d055fe0b122359ddad5e461ea32b340dc29734c1d0851cd4d0e9ad0e';

exports.register = (userData) => User.create(userData);

exports.login = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error('Invalid username or password!');
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new Error('Invalid username or password!');
    }

    const payload = {
        _id: user._id,
        username: user.username,
    };

    const token = await jwt.sign(payload, SECRET, { expiresIn: '2d' });

    return token;
};