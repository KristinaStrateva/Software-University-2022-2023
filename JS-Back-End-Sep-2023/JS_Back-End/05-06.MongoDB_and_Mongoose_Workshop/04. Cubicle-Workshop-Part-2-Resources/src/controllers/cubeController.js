const router = require('express').Router();

const cubeManager = require('../managers/cubeManager');

router.get('/create', (req, res) => {
    res.render('cube/create');
});

router.post('/create', async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;

    await cubeManager.createCube({
        name,
        description,
        imageUrl,
        difficultyLevel: Number(difficultyLevel),
    });

    res.redirect('/');
});

router.get('/:cubeId/details', async (req, res) => {
    const cubeId = req.params.cubeId;

    const currCube = await cubeManager.getCubeById(cubeId).lean();

    if (!currCube) {
        res.redirect('/404');
    }

    res.render('cube/details', currCube);
});

module.exports = router;