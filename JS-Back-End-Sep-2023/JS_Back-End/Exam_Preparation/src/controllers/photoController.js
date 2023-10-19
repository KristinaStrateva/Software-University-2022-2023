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

module.exports = router;