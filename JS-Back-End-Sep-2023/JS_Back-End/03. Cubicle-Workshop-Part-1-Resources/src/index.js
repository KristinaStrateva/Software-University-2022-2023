const express = require('express');

const expressConfigurator = require('./config/expressConfigurator');
const hbsConfigurator = require('./config/hbsConfigurator');
const homeController = require('./controllers/homeController');

const app = express();

const PORT = 5000;

expressConfigurator(app);
hbsConfigurator(app);

app.use(homeController);

app.listen(PORT, () => console.log(`Server is listening on posrt ${PORT}...`));