function safari(input) {
    let budget = Number(input[0]);
    let fuelNeeded = Number(input[1]);
    let weekDay = (input[2]);

    fuelPricePerL = Number(2.10);
    guidePrice = Number(100);

    let safariPrice = (fuelNeeded * fuelPricePerL) + guidePrice;

    if (weekDay === "Saturday") {
        safariPrice = 0.9 * safariPrice;
    } else if (weekDay === "Sunday") {
        safariPrice = 0.8 * safariPrice;
    }

    if (safariPrice <= budget) {
        console.log(`Safari time! Money left: ${(budget - safariPrice).toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${(safariPrice - budget).toFixed(2)} lv.`);
    }
}

safari(["120", "30", "Saturday"]);