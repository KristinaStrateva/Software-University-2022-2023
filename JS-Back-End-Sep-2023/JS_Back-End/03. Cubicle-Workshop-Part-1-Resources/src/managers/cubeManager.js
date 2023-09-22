const uniqueId = require('uniqid');

const cubes = [];

exports.getAllCubes = () => {
    return cubes.slice();
}

exports.createCube = (name, description, imageUrl, difficultyLevel) => {
    const newCube = {
        id: uniqueId(),
        name,
        description,
        imageUrl,
        difficultyLevel: Number(difficultyLevel),
    };

    cubes.push(newCube);

    return newCube;
}