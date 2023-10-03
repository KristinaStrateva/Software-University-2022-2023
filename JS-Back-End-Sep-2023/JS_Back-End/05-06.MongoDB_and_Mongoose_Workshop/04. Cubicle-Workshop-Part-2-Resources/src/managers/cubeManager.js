const Cube = require('../models/Cube');

exports.getAllCubes = async (search, from, to) => {
    let result = await Cube.find().lean();

    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return result;
}

exports.getCubeById = (id) => Cube.findById(id);

exports.createCube = async ({name, description, imageUrl, difficultyLevel}) => {
    const cube = new Cube({
        name,
        description,
        imageUrl,
        difficultyLevel,
    });

    await cube.save();

    return cube;
};