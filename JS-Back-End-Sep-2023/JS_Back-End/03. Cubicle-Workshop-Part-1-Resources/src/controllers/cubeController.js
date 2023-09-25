const router = require('express').Router();

const cubeManager = require('../managers/cubeManager');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    const {name, description, imageUrl, difficultyLevel} = req.body;

    cubeManager.createCube(name, description, imageUrl, difficultyLevel);

    res.redirect('/');
});

router.get('/:cubeId/details', (req, res) => {
    const cubeId = req.params.cubeId;

    const currCube = cubeManager.getCubeById(cubeId);

    if (!currCube) {
        res.redirect('/404');
    }

    res.render('details', currCube);
});

module.exports = router;