function easterTrip(input) {
    let destination = input[0];
    let dates = input[1];
    let nightsAmount = Number(input[2]);

    let price = 0;

    switch (destination) {
        case "France":
            if (dates === "21-23") {
                price = 30;
            } else if (dates === "24-27") {
                price = 35;
            } else if (dates === "28-31") {
                price = 40;
            }
        break;
        case "Italy":
            if (dates === "21-23") {
                price = 28;
            } else if (dates === "24-27") {
                price = 32;
            } else if (dates === "28-31") {
                price = 39;
            }
        break;
        case "Germany":
            if (dates === "21-23") {
                price = 32;
            } else if (dates === "24-27") {
                price = 37;
            } else if (dates === "28-31") {
                price = 43;
            }
        break;
    }

    let totalPrice = nightsAmount * price;

    console.log(`Easter trip to ${destination} : ${totalPrice.toFixed(2)} leva.`);
}

easterTrip(["Germany", "24-27", "5"]);