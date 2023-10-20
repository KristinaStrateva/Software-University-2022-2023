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
    // const comments = await photoManager.getAllComments(req.params.photoId).lean();
    const areComments = photo.comments.length;

    res.render('photos/details', { photo, isOwner, areComments });
});

router.post('/catalog/:photoId/comments', async (req, res) => {
    const { comment } = req.body;
    const photoId = req.params.photoId;
    const userId = req.user._id;

    await photoManager.addComment(photoId, { user: userId, comment });

    res.redirect(`/photos/catalog/${photoId}/details`);
});

router.get('/:photoId/delete', async (req, res) => {
    try {
        await photoManager.delete(req.params.photoId);

        res.redirect('/photos/catalog');

    } catch (error) {
        const photo = await photoManager.getPhotoById(req.params.photoId).lean();
        const isOwner = req.user?._id == photo.owner._id;

        res.render('photos/details', { error: 'Unsuccessfully deleted photo!', photo, isOwner });
    }
});

router.get('/:photoId/edit', async (req, res) => {
    const photo = await photoManager.getPhotoById(req.params.photoId).lean();

    res.render('photos/edit', { photo });
});

router.post('/:photoId/edit', async (req, res) => {
    const photoData = req.body;

    try {
        await photoManager.update(req.params.photoId, photoData);

        res.redirect(`/photos/catalog/${req.params.photoId}/details`);

    } catch (error) {
        res.render('photos/edit', { error: 'Unsuccessfully updated photo!', photoData });
    }
});

module.exports = router;