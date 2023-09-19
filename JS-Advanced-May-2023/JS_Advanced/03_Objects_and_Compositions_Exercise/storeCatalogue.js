function storeCatalogue(input) {
    let sortedProducts = input.sort((a, b) => a.localeCompare(b));
    let firstLetter = '';

    for (const line of sortedProducts) {
        let currProduct = line.split(' : ');

        if (firstLetter !== line[0]) {
            console.log(line[0]);
        }

        console.log(`  ${currProduct.join(': ')}`);

        firstLetter = line[0];
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',
]);