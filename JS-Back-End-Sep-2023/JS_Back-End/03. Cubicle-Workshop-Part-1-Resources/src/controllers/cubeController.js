const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    const {name, description, imageUrl, difficulty} = req.body;

    
});

module.exports = router;