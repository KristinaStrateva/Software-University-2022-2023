// const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
// const formidable = require('formidable');
// const breeds = require('../data/breed');
// const cats = require('../data/cats');


module.exports = (req, res) => {
    const pathname = req.url;

    if (pathname == '/cats/add-cat' && req.method == 'GET') {
        const filePath = path.normalize(path.join(__dirname, '../views/addCat.html'));

        const stream = fs.createReadStream(filePath);

        stream.on('data', (data) => {
            res.write(data);
        });

        stream.on('end', () => {
            res.end();
        });

        stream.on('error', (err) => {
            console.log(err);
        });

    } else if (pathname == '/cats/add-breed' && req.method == 'GET') {
        const filePath = path.normalize(path.join(__dirname, '../views/addBreed.html'));

        const stream = fs.createReadStream(filePath);

        stream.on('data', (data) => {
            res.write(data);
        });

        stream.on('end', () => {
            res.end();
        });

        stream.on('error', (err) => {
            console.log(err);
        });

    } else if (pathname == '/cats/add-breed' && req.method == 'POST') {
        const filePath = path.normalize(path.join(__dirname, '../views/addBreed.html'));
        let formData = '';

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);

                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });

                res.write('404 NOT FOUND');

                res.end();
                return;
            }

            formData = data;
        });

        const body = qs.decode(formData);
        console.log(body)

        fs.readFile('../data/breed.json', (err, data) => {
            if (err) {
                throw err;
            }

            console.log(data);
        });
    }
}