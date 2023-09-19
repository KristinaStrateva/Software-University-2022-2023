function bottlingJuice(input) {
    let flavors = {};
    let bottledFlavors = [];

    for (const line of input) {
        const [flavor, quantity] = line.split(' => ');

        if (!flavors[flavor]) {
            flavors[flavor] = 0;
        }

        flavors[flavor] += Number(quantity);

        if (flavors[flavor] / 1000 >= 1 && !bottledFlavors.includes(flavor)) {
            bottledFlavors.push(flavor);
        }
    }

    bottledFlavors.forEach(flavor => console.log(`${flavor} => ${Math.trunc(flavors[flavor] / 1000)}`));
}

bottlingJuice([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549',
]);

console.log('-----------------');

bottlingJuice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789',
]);