const express = require('express');
const handlebars = require('express-handlebars');
const expressConfigurator = require('./config/express');

const app = express();
const PORT = 5000;

expressConfigurator(app);

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => console.log(`Server is listening on posrt ${PORT}...`));