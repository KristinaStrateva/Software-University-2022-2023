function heroicInventory(input) {
    let heroes = [];

    for (const line of input) {
        let [name, level, items] = line.split(' / ');
        let currHero = {};

        if (items) {
            items = [...items.split(', ')];

        } else {
            items = [];
        }

        currHero.name = name;
        currHero.level = Number(level);
        currHero.items = items;

        heroes.push(currHero);
    }

    return JSON.stringify(heroes);
}

console.log(heroicInventory([
    'Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara',
]));