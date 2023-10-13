const router = require('express').Router();

const { checkAuthentication } = require('../middlewares/authMiddlewares');
const cubeManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager');
const viewHelpers = require('../utils/viewHelpers');
const { ownerCheck } = require('../utils/ownerCheck');
const { extractErrorMessages } = require('../utils/errorHelpers');

router.get('/create', checkAuthentication, (req, res) => {
    res.render('cubes/create');
});

router.post('/create', checkAuthentication, async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;

    try {
        await cubeManager.createCube({
            name,
            description,
            imageUrl,
            difficultyLevel: Number(difficultyLevel),
            owner: req.user._id,
        });

        res.redirect('/');

    } catch (error) {
        const errorMessages = extractErrorMessages(error);

        res.status(404).render('cubes/create', { errorMessages });
    }
});

router.get('/:cubeId/details', async (req, res) => {
    const cubeId = req.params.cubeId;

    const currCube = await cubeManager.getCubeById(cubeId).lean();

    if (!currCube) {
        return res.redirect('/404');
    }

    const isOwner = currCube.owner?.toString() === req.user?._id;

    res.render('cubes/details', { currCube, isOwner });
});

router.get('/:cubeId/attach-accessory', checkAuthentication, async (req, res) => {
    const cube = await cubeManager.getCubeById(req.params.cubeId).lean();

    ownerCheck(cube, req, res);

    const accessories = await accessoryManager.getExceptThese(cube.accessories).lean();

    const hasAccessories = accessories.length > 0;

    res.render('accessories/attach', { cube, accessories, hasAccessories });
});

router.post('/:cubeId/attach-accessory', checkAuthentication, async (req, res) => {
    const { accessory: accessoryId } = req.body;
    const cubeId = req.params.cubeId;

    try {
        await cubeManager.attachAccessory(cubeId, accessoryId);

        res.redirect(`/cubes/${cubeId}/details`);

    } catch (error) {
        const errorMessages = extractErrorMessages(error);
        const cubes = await cubeManager.getAllCubes();

        res.status(404).render('index', {cubes, undefined, undefined, undefined, errorMessages });
    }
});

router.get('/:cubeId/delete', checkAuthentication, async (req, res) => {
    const currCube = await cubeManager.getCubeById(req.params.cubeId).lean();

    ownerCheck(currCube, req, res);

    const options = viewHelpers.generateDifficultyLevelOptionsViewData(currCube.difficultyLevel);

    res.render('cubes/delete', { currCube, options });
});

router.post('/:cubeId/delete', checkAuthentication, async (req, res) => {
    await cubeManager.deleteCube(req.params.cubeId);

    res.redirect('/');
});

router.get('/:cubeId/edit', checkAuthentication, async (req, res) => {
    const currCube = await cubeManager.getCubeById(req.params.cubeId).lean();

    ownerCheck(currCube, req, res);

    const options = viewHelpers.generateDifficultyLevelOptionsViewData(currCube.difficultyLevel);

    res.render('cubes/edit', { currCube, options });
});

router.post('/:cubeId/edit', checkAuthentication, async (req, res) => {
    const cubeData = req.body;

    try {
        await cubeManager.updateCube(req.params.cubeId, cubeData);

        res.redirect(`/cubes/${req.params.cubeId}/details`);

    } catch (error) {
        const errorMessages = extractErrorMessages(error);

        res.status(404).render('cubes/edit', { errorMessages });
    }
});

module.exports = router;