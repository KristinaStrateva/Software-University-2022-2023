const bcrypt = require('bcrypt');

const User = require('../models/User');
const generateToken = require('../utils/generateToken');

const { SECRET } = require('../config/utilsConfig');

exports.login = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid username or password!');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid username or password!');
    }

    const token = await generateToken(user, SECRET);

    return token;
};

exports.register = async (userData) => {
    const user = await User.findOne({ username: userData.username });

    if (user) {
        throw new Error('This username already exists!');
    }

    const createdUser = await User.create(userData);

    const token = await generateToken(createdUser, SECRET);

    return token;
};

exports.getUserById = (userId) => User.findById(userId);