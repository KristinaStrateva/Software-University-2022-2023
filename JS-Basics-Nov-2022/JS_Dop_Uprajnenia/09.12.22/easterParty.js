function easterParty(input) {
    let guestsAmount = Number(input[0]);
    let guestCouvertPrice = Number(input[1]);
    let budget = Number(input[2]);

    if (guestsAmount > 20) {
        guestCouvertPrice *= 0.75;
    } else if (guestsAmount > 15) {
        guestCouvertPrice *= 0.8;
    } else if (guestsAmount >= 10) {
        guestCouvertPrice *= 0.85;
    }

    let cakePrice = 0.1 * budget;

    let totalExpenses = guestsAmount * guestCouvertPrice + cakePrice;

    if (totalExpenses <= budget) {
        let moneyLeft = budget - totalExpenses;
        console.log(`It is party time! ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = totalExpenses - budget;
        console.log(`No party! ${moneyNeeded.toFixed(2)} leva needed.`);
    }
}

easterParty(["18", "30", "450"]);