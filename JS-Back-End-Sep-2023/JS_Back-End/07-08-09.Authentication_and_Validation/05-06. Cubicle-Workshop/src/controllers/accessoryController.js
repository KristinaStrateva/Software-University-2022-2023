const router = require('express').Router();

const accessoryManager = require('../managers/accessoryManager');
const { extractErrorMessages } = require('../utils/errorHelpers');

router.get('/create', (req, res) => {
    res.render('accessories/create');
});

router.post('/create', async (req, res) => {
    const {name, description, imageUrl} = req.body;

    try {
        await accessoryManager.createAccessory({
            name,
            description,
            imageUrl,
        });
    
        res.redirect('/');
        
    } catch (error) {
        const errorMessages = extractErrorMessages(error);

        res.status(404).render('accessories/create', { errorMessages });
    }
});

module.exports = router;