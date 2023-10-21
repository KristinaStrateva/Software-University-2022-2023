const router = require('express').Router();

const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const cryptoController = require('./controllers/cryptoController');

router.use(homeController);
router.use('/users', userController);
router.use('/crypto', cryptoController);
// router.get('*', (req, res) => {
//     res.redirect('/404');
// });


module.exports = router;