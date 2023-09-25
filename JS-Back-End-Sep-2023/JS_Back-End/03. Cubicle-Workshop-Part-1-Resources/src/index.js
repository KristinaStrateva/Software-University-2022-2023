const express = require('express');

const expressConfigurator = require('./config/expressConfigurator');
const hbsConfigurator = require('./config/hbsConfigurator');
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

const app = express();

const PORT = 5000;

expressConfigurator(app);
hbsConfigurator(app);

app.use(homeController);
app.use('/cubes', cubeController);
app.get('*', (req, res) => {
    res.redirect('/404');
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));