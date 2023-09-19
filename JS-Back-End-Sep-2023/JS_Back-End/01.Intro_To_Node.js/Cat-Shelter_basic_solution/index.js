const http = require('http');
const port = 3000;

const homePage = require('./templates/home');
const cats = require('./data/cats');
const breeds = require('./data/breeds');
const siteCss = require('./templates/site.css');
const addBreedPage = require('./templates/addBreed');
const addBreedHandler = require('./handlers/addBreedHandler');
const addCatPage = require('./templates/addCat');
const addCatHandler = require('./handlers/addCatHandler');


http.createServer((req, res) => {

    if (req.url == '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.write(homePage(cats));

        res.end();

    } else if (req.url == '/content/styles/site.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css'
        });

        res.write(siteCss);

        res.end();

    } else if (req.url == '/cats/add-breed') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.write(addBreedPage);

        res.end();

    } else if (req.url == '/submit-breed' && req.method == 'POST') {
        addBreedHandler(req, res);

    } else if (req.url == '/cats/add-cat') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.write(addCatPage(breeds));

        res.end();

    } else if (req.url == '/submit-cat' && req.method == 'POST') {
        addCatHandler(req, res);
    }


}).listen(port);

console.log('Server is listening on port 3000...');