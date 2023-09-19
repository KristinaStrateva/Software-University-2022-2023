function movieDestination(input) {
    let movieBudget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let daysAmount = Number(input[3]);

    let dayPrice = 0;

    if (season === "Winter") {
        if (destination === "Dubai") {
            dayPrice = 45000;
        } else if (destination === "Sofia") {
            dayPrice = 17000;
        } else if (destination === "London") {
            dayPrice = 24000;
        }
    } else if (season === "Summer"){
        if (destination === "Dubai") {
            dayPrice = 40000;
        } else if (destination === "Sofia") {
            dayPrice = 12500;
        } else if (destination === "London") {
            dayPrice = 20250;
        }
    }

    let totalPrice = daysAmount * dayPrice;
    let finalPrice = 0;

    if (destination === "Dubai") {
        finalPrice = 0.7 * totalPrice;
    } else if (destination === "Sofia") {
        finalPrice = 1.25 * totalPrice;
    } else {
        finalPrice = totalPrice;
    }

    if (movieBudget >= finalPrice) {
        console.log(`The budget for the movie is enough! We have ${(movieBudget - finalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${(finalPrice - movieBudget).toFixed(2)} leva more!`);
    }
}

movieDestination(["200000", "London", "Summer", "7"]);