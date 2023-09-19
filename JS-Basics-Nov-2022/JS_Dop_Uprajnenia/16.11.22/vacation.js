function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let sittingPlace = 0;
    let place = 0;
    let price = 0;

    if (budget <= 1000) {
        sittingPlace = "Camp";
        if (season === "Summer"){
                place = "Alaska";
                price = 0.65 * budget;
        } else if (season === "Winter") {
                place = "Morocco";
                price = 0.45 * budget;
        }
    } else if (budget > 1000 && budget <= 3000) {
        sittingPlace = "Hut";
        if (season === "Summer"){
            place = "Alaska";
            price = 0.8 * budget;
        } else if (season === "Winter") {
            place = "Morocco";
            price = 0.6 * budget;
        }
    } else if (budget > 3000) {
        sittingPlace = "Hotel";
        price = 0.9 * budget
        if (season === "Summer"){
            place = "Alaska";
        } else if (season === "Winter") {
            place = "Morocco";
        }
    }

    console.log(`${place} - ${sittingPlace} - ${price.toFixed(2)}`);
}

vacation(["5000", "Winter"]);