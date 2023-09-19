function easterBake(input) {
    let index = 0;
    let easterCakesAmount = Number(input[index]);
    index++;

    let totalUsedSugar = 0;
    let totalUsedFlour = 0;

    let maxSugarUsed = Number.MIN_SAFE_INTEGER;
    let maxFlourUsed = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= easterCakesAmount; i++) {
        let sugarUsed = Number(input[index]);
        index++;
        let flourUsed = Number(input[index]);
        index++;

        totalUsedSugar += sugarUsed;
        totalUsedFlour += flourUsed;

        if (sugarUsed > maxSugarUsed) {
            maxSugarUsed = sugarUsed;
        }

        if (flourUsed > maxFlourUsed) {
            maxFlourUsed = flourUsed;
        }
    }

    let sugarPacksNeeded = totalUsedSugar / 950;
    let flourPacksNeeded = totalUsedFlour / 750;

    console.log(`Sugar: ${Math.ceil(sugarPacksNeeded)}`);
    console.log(`Flour: ${Math.ceil(flourPacksNeeded)}`);
    console.log(`Max used flour is ${maxFlourUsed} grams, max used sugar is ${maxSugarUsed} grams.`);
}

easterBake([
    "3",
    "400",
    "350",
    "250",
    "300",
    "450",
    "380"
]);