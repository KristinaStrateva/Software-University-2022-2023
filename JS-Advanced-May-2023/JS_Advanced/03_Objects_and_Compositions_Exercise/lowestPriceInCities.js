function lowestPriceInCities(input) {
    let products = {};

    for (const line of input) {
        let [town, productName, price] = line.split(' | ');
        price = Number(price);

        if (!products[productName]) {
            products[productName] = {};
        }

        products[productName][town] = price;
    }

    let productsAsArr = Object.entries(products);

    for (const [product, info] of productsAsArr) {
        let sortedInfo = Object.entries(info).sort((a, b) => a[1] - b[1]);

        let [town, price] = sortedInfo[0];

        console.log(`${product} -> ${price} (${town})`);
    }
}

lowestPriceInCities([
    'Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10',
]);