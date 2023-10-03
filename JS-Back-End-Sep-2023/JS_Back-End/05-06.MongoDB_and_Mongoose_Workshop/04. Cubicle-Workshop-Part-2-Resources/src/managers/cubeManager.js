const res = require('express/lib/response');
const uniqueId = require('uniqid');

const cubes = [
    {
        id: '1',
        name: 'Gan356 Air SM',
        description: 'Magnets in AirSM will not drop, and their positions will be more precise with the Magnets-Snap-On design. With the use of 3mm*2mm magnets, the handfeel will be more stable and more comfortable. P.S. This design is brand new for the AirSM.',
        imageUrl: 'https://ae01.alicdn.com/kf/HTB1CSddXRxRMKJjy0Fdq6yifFXa6/Gan-356-Air-SM-3x3-Black-Magic-cube-GAN-Air-SM-Magnetic-3x3x3-Speed-cube-gans.jpg',
        difficultyLevel: '3',
    },
    {
        id: '2',
        name: 'Eco-Dark',
        description: 'If you are a fan of the DC universe you are going to love this thing. Eco-Dark Rubik\'s Cube is a savior for those who are not into stickers and colors. Get the darker side of your brain unleashed through this environment-friendly Rubik\'s cube that is completely black.',
        imageUrl: 'https://thingsidesire.com/wp-content/uploads/2018/06/Eco-Dark-Rubik%E2%80%99s-Cube2.jpg',
        difficultyLevel: '6',
    },
    {
        id: '3',
        name: 'Pyraminx',
        description: 'The Pyraminx, also known as the triangle Rubik\'s Cube, is a tetrahedron-shaped 3-layered twisty puzzle with four triangular faces divided into nine identical smaller triangles.  It was invented by Uwe Mèffert in 1970 and introduced by Tomy Toys of Japan in 1981. The puzzle has 3,732,480 possible permutations and can be solved from any random position in less than 12 moves.',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61izOzq%2BBAL._SY355_.jpg',
        difficultyLevel: '1',
    },
    {
        id: '4',
        name: 'Megaminx',
        description: 'The Megaminx, previously called as Hungarian Supernova was patented by Uwe Mèffert. It is a dodecahedron-shaped face-turning twisty puzzle which is very similar to the classic Rubik\'s Cube. The solution is almost the same, just a few new algorithms come in when you reach the last layer, so if you\'re familiar with the classic 3x3x3 Cube then you won\'t have problems solving the Megaminx either.',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61HpQqVQ37L._SY355_.jpg',
        difficultyLevel: '3',
    },
];

exports.getAllCubes = (search, from, to) => {
    let result = cubes.slice();

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

exports.getCubeById = (id) => {
    return cubes.find(cube => cube.id === id);
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