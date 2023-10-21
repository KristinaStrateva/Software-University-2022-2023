const router = require('express').Router();

const cryptoManager = require('../managers/cryptoManager');
const Crypto = require('../models/Crypto');
const { extractErrorMessages } = require('../utils/errorHelpers');

router.get('/create', (req, res) => {
    res.render('crypto/create');
});

router.post('/create', async (req, res) => {
    const {
        name,
        imageUrl,
        price,
        description,
        paymentMethod
    } = req.body;

    try {
        await cryptoManager.create({ name, imageUrl, price, description, paymentMethod, owner: req.user._id });

        res.redirect('/crypto/catalog');

    } catch (error) {
        res.render('crypto/create', { error: extractErrorMessages(error) });
    }
});

router.get('/catalog', async (req, res) => {
    try {
        const cryptos = await cryptoManager.getAllCrypto().lean();
        const hasCryptos = cryptos.length;
    
        res.render('crypto/catalog', { cryptos, hasCryptos });

    } catch (error) {
        res.redirect('/', { error: extractErrorMessages(error) });
    }
});

router.get('/catalog/:cryptoId/details', async (req, res) => {
    try {
        const crypto = await cryptoManager.getCryptoById(req.params.cryptoId).lean();
        const isOwner = req.user?._id == crypto.owner._id;
        const hasBought = crypto.buyCrypto.find(x => x.user._id == req.user?._id);
    
        res.render('crypto/details', { crypto, isOwner, hasBought });

    } catch (error) {
        const cryptos = await cryptoManager.getAllCrypto().lean();
        const hasCryptos = cryptos.length;

        res.redirect('/crypto/catalog', { error: extractErrorMessages(error), cryptos, hasCryptos });
    }
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