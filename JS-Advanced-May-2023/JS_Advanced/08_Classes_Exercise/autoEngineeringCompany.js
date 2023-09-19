function carRegister(input) {
    let brands = new Map();

    for (const line of input) {
        let [brand, model, amount] = line.split(' | ');
        amount = Number(amount);

        if (!brands.has(brand)) {
            brands.set(brand, new Map());
        }

        if (!brands.get(brand).has(model)) {
            brands.get(brand).set(model, 0);
        }

        const newAmount = brands.get(brand).get(model) + amount;

        brands.get(brand).set(model, newAmount);
    }

    Array.from(brands).forEach(([brand, models]) => {
        console.log(brand);

        Array.from(models).forEach(([model, amount]) => {
            console.log(`###${model} -> ${amount}`);
        })
    })
}

carRegister([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10',
]);