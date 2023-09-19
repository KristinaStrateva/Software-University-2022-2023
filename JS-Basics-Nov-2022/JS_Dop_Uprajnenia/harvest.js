function harvest(input) {
    let X = Number(input[0]);
    let Y = Number(input[1]);
    let Z = Number(input[2]);
    let workersAmount = Number(input[3]);

    kgNeededPerLiterOfWine = Number(2.5);

    let totalHarvest = X * Y;
    let harvestGoingForWine = (40 / 100) * totalHarvest;
    let litersOfWine = harvestGoingForWine / kgNeededPerLiterOfWine;

    if (litersOfWine < Z) {
        console.log(`It will be a tough winter! More ${Math.floor(Z - litersOfWine)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(litersOfWine)} liters.`);
        console.log(`${Math.ceil(litersOfWine - Z)} liters left -> ${Math.ceil((litersOfWine - Z) / workersAmount)} liters per person.`);
    }
}

harvest(["1020", "1.5", "425", "4"]);