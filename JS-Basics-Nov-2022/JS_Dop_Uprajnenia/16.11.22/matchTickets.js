function matchTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let peopleCount = Number(input[2]);

    let transportPrice = 0;
    let vipTicketPrice = peopleCount * 499.99;
    let normalTicketPrice = peopleCount * 249.99;

    if (peopleCount >= 1 && peopleCount <= 4) {
        transportPrice = 0.75 * budget;
    } else if (peopleCount >= 5 && peopleCount <= 9) {
        transportPrice = 0.6 * budget;
    } else if (peopleCount >= 10 && peopleCount <= 24) {
        transportPrice = 0.5 * budget;
    } else if (peopleCount >= 25 && peopleCount <= 49){
        transportPrice = 0.4 * budget;
    } else if (peopleCount >= 50) {
        transportPrice = 0.25 * budget;
    }

     switch (category) {
        case "VIP":
            if ((budget - transportPrice) >= vipTicketPrice) {
                console.log(`Yes! You have ${((budget - transportPrice) - vipTicketPrice).toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${(vipTicketPrice - (budget - transportPrice)).toFixed(2)} leva.`);
            }
            break;
        case "Normal":
            if ((budget - transportPrice) >= normalTicketPrice) {
                console.log(`Yes! You have ${((budget - transportPrice) - normalTicketPrice).toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${(normalTicketPrice - (budget - transportPrice)).toFixed(2)} leva.`);
            }
            break;
    }
}

matchTickets(["30000", "VIP", "49"]);