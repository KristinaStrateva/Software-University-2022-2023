function vegetableMarket(input) {
    let vegetablesPricePerKg = Number(input[0]);
    let fruitsPricePerKg = Number(input[1]);
    let sumVegetablesKg = Number(input[2]);
    let sumFruitsKg = Number(input[3]);

    euro  = 1.94;

    let profitInLv = sumVegetablesKg * vegetablesPricePerKg + sumFruitsKg * fruitsPricePerKg;

    let profitInEuro = profitInLv / euro;
    console.log((profitInEuro).toFixed(2));
}

vegetableMarket(["1.5", "2.5", "10", "10"]);