function petShop(input) {
    let dogFood = Number(2.5);
    let catFood = Number(4);
    let dogPacks = Number(input[0]);
    let catPacks = Number(input[1]);
    let sum = (dogFood * dogPacks) + (catFood * catPacks);

    console.log(`${sum} lv.`);
}

petShop(["5", "7"]);