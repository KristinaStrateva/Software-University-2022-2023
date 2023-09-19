function deerOfSanta(input) {
    let daysGoneAmount = Number(input[0]);
    let leftFood = Number(input[1]);
    let dailyFoodForDeer1 = Number(input[2]);
    let dailyFoodForDeer2 = Number(input[3]);
    let dailyFoodForDeer3 = Number(input[4]);

    let totalDailyFood = dailyFoodForDeer1 + dailyFoodForDeer2 + dailyFoodForDeer3;

    let totalNeededFood = totalDailyFood * daysGoneAmount;

    if (leftFood >= totalNeededFood) {
        console.log(`${Math.floor(leftFood - totalNeededFood)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(totalNeededFood - leftFood)} more kilos of food are needed.`);
    }
}

deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"]);