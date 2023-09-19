function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermanNumber = Number(input[2]);

    let rentPrice = 0;

    switch (season) {
        case "Spring":    
            if (fishermanNumber <= 6) {
                rentPrice = 0.9 * 3000;
            } else if (fishermanNumber >= 7 && fishermanNumber <= 11) {
                rentPrice = 0.85 * 3000;
            } else {
                rentPrice = 0.75 * 3000;
            } break;
        case "Summer":
        case "Autumn":
            if (fishermanNumber <= 6) {
                rentPrice = 0.9 * 4200;
            } else if (fishermanNumber >= 7 && fishermanNumber <= 11) {
                rentPrice = 0.85 * 4200;
            } else {
                rentPrice = 0.75 * 4200;
            } break;
        case "Winter":
            if (fishermanNumber <= 6) {
                rentPrice = 0.9 * 2600;
            } else if (fishermanNumber >= 7 && fishermanNumber <= 11) {
                rentPrice = 0.85 * 2600;
            } else {
                rentPrice = 0.75 * 2600;
            } break;
    }

    if (fishermanNumber % 2 === 0 && season !== "Autumn") {
        let totalRentPrice = 0.95 * rentPrice;
        if (budget >= totalRentPrice) {
            console.log(`Yes! You have ${(budget - totalRentPrice).toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money! You need ${(totalRentPrice - budget).toFixed(2)} leva.`);
        }
    } else {
        if (budget >= rentPrice) {
            console.log(`Yes! You have ${(budget - rentPrice).toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money! You need ${(rentPrice - budget).toFixed(2)} leva.`);
        }
    }
}

fishingBoat(["2000", "Winter", "12"]);