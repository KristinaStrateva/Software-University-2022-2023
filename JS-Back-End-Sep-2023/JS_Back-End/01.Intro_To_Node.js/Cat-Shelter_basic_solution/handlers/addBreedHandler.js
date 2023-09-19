const breeds = require('../data/breeds');


module.exports = (req, res) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const parsedData = new URLSearchParams(body);
        const breed = parsedData.get('breed');

        breeds.push(breed);

        res.writeHead(302, { 'Location': '/' });
        res.end();
    });


    // await addBreed(breed);

    // async function addBreed(breed) {
    //     const res = await fetch('/data/breeds.json', {
    //         method: 'post',
    //         header: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(breed)
    //     });

    //     return res.json();
    // }
}


