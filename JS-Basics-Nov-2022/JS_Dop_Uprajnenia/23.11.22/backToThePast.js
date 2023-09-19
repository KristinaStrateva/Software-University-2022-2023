function backToThePast(input) {
    let inheritance = Number(input[0]);
    let yearToLiveInThePast = Number(input[1]);

    let moneySpent = 0;
    let age = 17;

    for (let i = 1800; i <= yearToLiveInThePast; i++) {
        let currentYear = i;
        age++;

        if (currentYear % 2 === 0) {
            moneySpent += 12000;
        } else {
            moneySpent += 12000 + (50 * age);
        }
    }

    if (inheritance >= moneySpent) {
        let moneyLeft = inheritance - moneySpent;
        console.log(`Yes! He will live a carefree life and will have ${moneyLeft.toFixed(2)} dollars left.`);
    } else {
        let moneyNeeded = moneySpent - inheritance;
        console.log(`He will need ${moneyNeeded.toFixed(2)} dollars to survive.`);
    }
}

backToThePast(["100000.15", "1808"]);