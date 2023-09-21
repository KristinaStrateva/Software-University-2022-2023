const express = require('express');

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Hello ExpressJS!');
});

app.listen(PORT, () => console.log(`Server is listening on posrt ${PORT}...`));