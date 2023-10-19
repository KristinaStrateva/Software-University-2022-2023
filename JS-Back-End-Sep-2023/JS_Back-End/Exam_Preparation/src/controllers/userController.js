const router = require('express').Router();

const userManager = require('../managers/userManager');
const { extractErrorMessages } = require('../utils/errorHelpers');
const { TOKEN_KEY } = require('../config/utilsConfig');

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const token = await userManager.login(username, password);

        res.cookie(TOKEN_KEY, token, { httpOnly: true });

        res.redirect('/');

    } catch (error) {
        res.render('users/login', {error: extractErrorMessages(error)});
    }
});

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', async (req, res) => {
    const { username, email, password, rePassword } = req.body;

    try {
        await userManager.register({ username, email, password, rePassword });

        res.redirect('/users/login');

        // If after register we have to be automatically logged in:

        // const token = await userManager.register({ username, email, password, rePassword });

        // res.cookie(TOKEN_KEY, token, {httpOnly: true});

        // res.redirect('/');

    } catch (error) {
        res.render('users/register', {error: extractErrorMessages(error)});
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie(TOKEN_KEY);

    res.redirect('/');
});

module.exports = router;