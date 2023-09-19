function fitnessCard(input) {
    let currentSum = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sportType = input[3];

    if (gender === "m") {
        if (sportType === "Gym") {
            price = Number(42);
        } else if (sportType === "Boxing") {
            price = Number(41);
        } else if (sportType === "Yoga") {
            price = Number(45);
        } else if (sportType === "Zumba") {
            price = Number(34);
        } else if (sportType === "Dances") {
            price = Number(51);
        } else if (sportType === "Pilates") {
            price = Number(39);
        }

    } else if (gender === "f") {
        if (sportType === "Gym") {
            price = Number(35);
        } else if (sportType === "Boxing") {
            price = Number(37);
        } else if (sportType === "Yoga") {
            price = Number(42);
        } else if (sportType === "Zumba") {
            price = Number(31);            
        } else if (sportType === "Dances") {
            price = Number(53);
        } else if (sportType === "Pilates") {
            price = Number(37);
        }
    }

    if (age <= 19) {
        cardPrice = Number(0.8 * price);
    } else {
        cardPrice = price;
    }

    if (currentSum >= cardPrice) {
        console.log(`You purchased a 1 month pass for ${sportType}.`);
    } else {
        console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
    }
}

fitnessCard(["50", "m", "23", "Gym"]);