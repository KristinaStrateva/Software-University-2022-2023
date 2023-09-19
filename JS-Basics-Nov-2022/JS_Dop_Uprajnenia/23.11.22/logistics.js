function logistics(input) {
    let cargoAmount = Number(input[0]);

    let cargoWeight = 0;
    let totalCargoPrice = 0;
    let cargoWeightWithVan = 0;
    let cargoWeightWithTruck = 0;
    let cargoWeightWithTrain = 0;

    for (let i = 1; i <= cargoAmount; i++) {
        let currentCargoWeight = Number(input[i]);

        if (currentCargoWeight < 4) {
            let cargoPricePerTWithVan = 200;
            totalCargoPrice += currentCargoWeight * cargoPricePerTWithVan;
            cargoWeightWithVan += currentCargoWeight;
        } else if (currentCargoWeight < 12) {
            let cargoPricePerTWithTruck = 175;
            totalCargoPrice += currentCargoWeight * cargoPricePerTWithTruck;
            cargoWeightWithTruck += currentCargoWeight;
        } else {
            let cargoPricePerTWithTrain = 120;
            totalCargoPrice += currentCargoWeight * cargoPricePerTWithTrain;
            cargoWeightWithTrain += currentCargoWeight;
        }

        cargoWeight += currentCargoWeight;
    }

    let averagePricePerT = totalCargoPrice / cargoWeight;
    let cargoWeightWithVanPercent = (cargoWeightWithVan / cargoWeight) * 100;
    let cargoWeightWithTruckPercent = (cargoWeightWithTruck / cargoWeight) * 100;
    let cargoWeightWithVTrainPercent = (cargoWeightWithTrain / cargoWeight) * 100;

    console.log(averagePricePerT.toFixed(2));
    console.log(`${cargoWeightWithVanPercent.toFixed(2)}%`);
    console.log(`${cargoWeightWithTruckPercent.toFixed(2)}%`);
    console.log(`${cargoWeightWithVTrainPercent.toFixed(2)}%`);
}

logistics(["5", "2", "10", "20", "1", "7"]);