const Accessory = require('../models/Accessory');

exports.createAccessory = async ({name, description, imageUrl}) => {
    const accessory = new Accessory({
        name,
        description,
        imageUrl,
    });

    await accessory.save();

    return accessory;
} 