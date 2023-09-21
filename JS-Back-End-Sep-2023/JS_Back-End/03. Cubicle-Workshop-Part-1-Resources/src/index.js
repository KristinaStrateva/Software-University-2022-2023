const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const PORT = 5000;

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', '/src/views');

app.get('/', (req, res) => {
    res.send('Hello ExpressJS!');
});

app.listen(PORT, () => console.log(`Server is listening on posrt ${PORT}...`));