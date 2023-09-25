const express = require('express');

const expressConfigurator = require('./config/expressConfigurator');
const hbsConfigurator = require('./config/hbsConfigurator');
const routes = require('./routes');

const app = express();

const PORT = 5000;

expressConfigurator(app);
hbsConfigurator(app);

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));