const router = require('express').Router();

const cubeManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager');

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

router.get('/:cubeId/attach-accessory', async (req, res) => {
    const cube = await cubeManager.getCubeById(req.params.cubeId).lean();
    const accessories = await accessoryManager.getAllAccessories().lean();

    res.render('accessory/attach', { cube, accessories });
});

router.post('/:cubeId/attach-accessory', async (req, res) => {

});

module.exports = router;