const router = require('express').Router();

const cubeManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager');

router.get('/create', (req, res) => {
    res.render('cubes/create');
});

router.post('/create', async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;

    await cubeManager.createCube({
        name,
        description,
        imageUrl,
        difficultyLevel: Number(difficultyLevel),
        owner: req.user._id,
    });

    res.redirect('/');
});

router.get('/:cubeId/details', async (req, res) => {
    const cubeId = req.params.cubeId;

    const currCube = await cubeManager.getCubeById(cubeId).lean();

    if (!currCube) {
        res.redirect('/404');
    }

    const isOwner = currCube.owner?.toString() === req.user._id;

    res.render('cubes/details', { currCube, isOwner });
});

router.get('/:cubeId/attach-accessory', async (req, res) => {
    const cube = await cubeManager.getCubeById(req.params.cubeId).lean();
    const accessories = await accessoryManager.getExceptThese(cube.accessories).lean();

    const hasAccessories = accessories.length > 0;

    res.render('accessories/attach', { cube, accessories, hasAccessories });
});

router.post('/:cubeId/attach-accessory', async (req, res) => {
    const { accessory: accessoryId } = req.body;
    const cubeId = req.params.cubeId;

    await cubeManager.attachAccessory(cubeId, accessoryId);

    res.redirect(`/cubes/${cubeId}/details`);
});

router.get('/:cubeId/delete', async (req, res) => {
    const currCube = await cubeManager.getCubeById(req.params.cubeId).lean();

    res.render('cubes/delete', currCube);
});

router.post('/:cubeId/delete', async (req, res) => {
    await cubeManager.deleteCube(req.params.cubeId);

    res.redirect('/');
});

module.exports = router;