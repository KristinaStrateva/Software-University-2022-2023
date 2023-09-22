const express = require('express');
const expressConfigurator = require('./config/expressConfigurator');
const hbsConfigurator = require('./config/hbsConfigurator');

const app = express();
const PORT = 5000;

expressConfigurator(app);
hbsConfigurator(app);

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => console.log(`Server is listening on posrt ${PORT}...`));