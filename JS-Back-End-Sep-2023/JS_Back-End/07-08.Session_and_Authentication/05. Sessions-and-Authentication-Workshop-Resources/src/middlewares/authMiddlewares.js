const jwt = require('../lib/jwt');
const { SECRET } = require('../config/config');

exports.auth = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (token) {
        try {
            const user = await jwt.verify(token, SECRET);

            req.user = user;
            res.locals.user = user;
            res.locals.isAuthenticated = true;

            next();

        } catch (error) {
            req.clearCookie('auth');

            res.redirect('/users/login');
        }

    } else {
        next();
    }
};