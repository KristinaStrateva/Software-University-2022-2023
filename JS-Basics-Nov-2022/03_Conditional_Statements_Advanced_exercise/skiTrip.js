function skiTrip(input) {
    let daysOfTrip = Number(input[0]);
    let roomType = input[1];
    let review = input[2];

    let price = 0;
    let totalPrice = 0;
    let nights = daysOfTrip - 1;

    switch (roomType) {
        case "room for one person":
            price = nights * 18;
            break;
        case "apartment":
            if (nights < 10) {
                price = 0.7 * (nights * 25);
            } else if (nights >= 10 && nights <= 15) {
                price = 0.65 * (nights * 25);
            } else {
                price = 0.5 * (nights* 25);
            }
            break;
        case "president apartment":
            if (nights < 10) {
                price = 0.9 * (nights * 35);
            } else if (nights >= 10 && nights <= 15) {
                price = 0.85 * (nights * 35);
            } else {
                price = 0.8 * (nights* 35);
            }
            break;
    }

    if (review === "positive") {
        totalPrice = 1.25 * price;
    } else if (review === "negative") {
        totalPrice = 0.9 * price;
    }

    console.log(totalPrice.toFixed(2));
}

skiTrip(["12", "room for one person", "positive"]);