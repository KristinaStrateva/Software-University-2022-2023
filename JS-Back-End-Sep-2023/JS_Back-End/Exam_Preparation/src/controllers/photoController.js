const router = require('express').Router();

const photoManager = require('../managers/photoManager');
const Photo = require('../models/Photo');
const { extractErrorMessages } = require('../utils/errorHelpers');

router.get('/create', (req, res) => {
    res.render('photos/create');
});

router.post('/create', async (req, res) => {
    const {
        name,
        age,
        description,
        location,
        imageUrl
    } = req.body;

    try {
        await photoManager.create({ name, age, description, location, imageUrl, owner: req.user._id });

        res.redirect('/photos/catalog');

    } catch (error) {
        res.render('photos/create', { error: extractErrorMessages(error) });
    }
});

router.get('/catalog', async (req, res) => {
    const photos = await photoManager.getAllPhotos().lean();

    res.render('photos/catalog', { photos });
});

router.get('/catalog/:photoId/details', async (req, res) => {
    const photo = await photoManager.getPhotoById(req.params.photoId).lean();
    const isOwner = req.user?._id == photo.owner._id;

    res.render('photos/details', { photo, isOwner });
});

router.get('/:photoId/delete', async (req, res) => {
    try {
        await photoManager.delete(req.params.photoId);
    
        res.redirect('/photos/catalog');

    } catch (error) {
        res.redirect(`/photos/catalog/${req.params.photoId}/details`, {error: extractErrorMessages(error)});
    }
});

module.exports = router;