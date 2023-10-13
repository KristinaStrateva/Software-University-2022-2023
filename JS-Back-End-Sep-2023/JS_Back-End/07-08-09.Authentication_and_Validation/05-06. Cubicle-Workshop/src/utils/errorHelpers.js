const { MongooseError, Error } = require("mongoose");

exports.extractErrorMessages = (error) => {

    if (error.code === 11000) { // Код 11000 е за дублиращи се ключове в MongoDB
        return ['This username already exists!'];
    }

    if (error instanceof MongooseError) {
        return Object.values(error.errors).map(x => x.message);
    }

    return [error.message];
};