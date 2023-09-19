function easterGuests(input) {
    let guestsAmount = Number(input[0]);
    let budget = Number(input[1]);

    let easterCakeAmount = Math.ceil(guestsAmount / 3);
    let eggsAmount = guestsAmount * 2;

    let totalEasterCakePrice = easterCakeAmount * 4;
    let totalEggsPrice = eggsAmount * 0.45;

    let totalExpenses = totalEasterCakePrice + totalEggsPrice;

    if (totalExpenses <= budget) {
        let moneyLeft = budget - totalExpenses;
        console.log(`Lyubo bought ${easterCakeAmount} Easter bread and ${eggsAmount} eggs.`);
        console.log(`He has ${moneyLeft.toFixed(2)} lv. left.`);
    } else {
        let moneyNeeded = totalExpenses - budget;
        console.log("Lyubo doesn't have enough money.");
        console.log(`He needs ${moneyNeeded.toFixed(2)} lv. more.`);
    }
}

easterGuests(["10", "35"]);