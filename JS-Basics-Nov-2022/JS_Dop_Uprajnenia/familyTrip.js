function familyTrip(input) {
    let familyBudget = Number(input[0]);
    let nightsAmount = Number(input[1]);
    let nightPrice = Number(input[2]);
    let addExpensesInPercent = Number(input[3]);

    if (nightsAmount > 7) {
        nightPrice = (95 / 100) * nightPrice;
    } else {
        nightPrice = nightPrice;
    }

    let totalNightsPrice = nightsAmount * nightPrice;
    let addExpensesInLv = (addExpensesInPercent / 100) * familyBudget;

    let totalExpenses = totalNightsPrice + addExpensesInLv;

    if (totalExpenses <= familyBudget) {
        console.log(`Ivanovi will be left with ${(familyBudget - totalExpenses).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(totalExpenses - familyBudget).toFixed(2)} leva needed.`);
    }
}

familyTrip(["500", "7", "66", "15"]);