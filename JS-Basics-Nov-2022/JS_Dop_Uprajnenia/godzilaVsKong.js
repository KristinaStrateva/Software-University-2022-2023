function godzilaVsKongMovie(input) {
    let movieBudget = Number(input[0]);
    let extrasAmount = Number(input[1]);
    let extraCostumePrice = Number(input[2]);

    let decor = (10 / 100) * movieBudget;
    
    if (extrasAmount > 150) {
        extraCostumePrice = (90 / 100) * extraCostumePrice;
    } else {
        extraCostumePrice = extraCostumePrice;
    }

    let totalExpenses = (extrasAmount * extraCostumePrice) + decor;

    if (totalExpenses > movieBudget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalExpenses - movieBudget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(movieBudget - totalExpenses).toFixed(2)} leva left.`);
    }
}

godzilaVsKongMovie(["9587.88", "222", "55.68"]);