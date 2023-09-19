function worldSnookerChampionship(input) {
    let index = 0;
    let championshipStage = input[index];
    index++;
    let ticketType = input[index];
    index++;
    let ticketAmount = Number(input[index]);
    index++;
    let photoWithTheTrophy = input[index];

    let price = 0;

    switch (championshipStage) {
        case "Quarter final":
            if (ticketType === "Standard") {
                price = 55.5;
            } else if (ticketType === "Premium") {
                price = 105.2;
            } else if (ticketType === "VIP") {
                price = 118.9;
            }
        break;
        case "Semi final":
            if (ticketType === "Standard") {
                price = 75.88;
            } else if (ticketType === "Premium") {
                price = 125.22;
            } else if (ticketType === "VIP") {
                price = 300.4;
            }
        break;
        case "Final":
            if (ticketType === "Standard") {
                price = 110.1;
            } else if (ticketType === "Premium") {
                price = 160.66;
            } else if (ticketType === "VIP") {
                price = 400;
            }
        break;
    }

    let totalPrice = ticketAmount * price;

    if (totalPrice > 4000) {
        totalPrice = 0.75 * totalPrice;

    } else if (totalPrice > 2500) {
        totalPrice = 0.9 * totalPrice;

        if (photoWithTheTrophy === "Y") {
            totalPrice += ticketAmount * 40;
        }
    } else {
        if (photoWithTheTrophy === "Y") {
            totalPrice += ticketAmount * 40;
        }
    }

    console.log(totalPrice.toFixed(2));
}

worldSnookerChampionship(["Semi final",
"VIP",
"9",
"Y"]);