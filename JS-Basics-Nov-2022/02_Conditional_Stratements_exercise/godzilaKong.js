function godzilaKong(input) {
    let movieBudget = Number(input[0]);
    let extrasAmount = Number(input[1]);
    let eachExtraCostumePrice = Number(input[2]);

    let decorPrice = (1 / 10) * movieBudget;
    let totalCostumePrice = extrasAmount * eachExtraCostumePrice;

    if (extrasAmount > 150) {
        totalCostumePrice = totalCostumePrice * 0.9;
    }

    let totalExpenses = decorPrice + totalCostumePrice;

    if (totalExpenses > movieBudget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalExpenses - movieBudget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(movieBudget - totalExpenses).toFixed(2)} leva left.`);
    }
}

godzilaKong(["9587.88", "222", "55.68"]);