function easterBakery(input) {
    let flourPricePerKg = Number(input[0]);
    let flourKg = Number(input[1]);
    let sugarKg = Number(input[2]);
    let eggsBoxesAmount = Number(input[3]);
    let yeastPacksAmount = Number(input[4]);

    let totalFlourPrice = flourKg * flourPricePerKg;
    let totalSugarPrice = sugarKg * (0.75 * flourPricePerKg);
    let totalEggsBoxesPrice = eggsBoxesAmount * (1.1 * flourPricePerKg);
    let totalYeastPacksPrice = yeastPacksAmount * (0.2 * (0.75 * flourPricePerKg));

    let finalPrice = totalFlourPrice + totalSugarPrice + totalEggsBoxesPrice + totalYeastPacksPrice;
    console.log(finalPrice.toFixed(2));
}

easterBakery([
    "50",
    "10",
    "3.5",
    "6",
    "1"
]);