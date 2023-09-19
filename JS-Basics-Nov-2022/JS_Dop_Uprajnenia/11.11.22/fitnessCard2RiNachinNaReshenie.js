function fitnessCard(input) {
    let currentSum = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sportType = input[3];

    if (gender === "m") {
        if (sportType === "Gym") {
            if (age <= 19) {
                cardPrice = Number(0.8 * 42);
            } else {
                cardPrice = Number(42);
            }

        } else if (sportType === "Boxing") {
            if (age <= 19) {
                cardPrice = Number(0.8 * 41);
            } else {
                cardPrice = Number(41);
            }

        } else if (sportType === "Yoga") {
            if (age <= 19) {
                cardPrice = Number(0.8 * 45);
            } else {
                cardPrice = Number(45);
            }

        } else if (sportType === "Zumba") {
            if (age <= 19) {
                cardPrice = Number(0.8 * 34);
            } else {
                cardPrice = Number(34);
            }

        } else if (sportType === "Dances") {
            if (age <= 19) {
                cardPrice = Number(0.8 * 51);
            } else {
                cardPrice = Number(51);
            }

        } else if (sportType === "Pilates") {
            if (age <= 19) {
                cardPrice = Number(0.8 * 39);
            } else {
                cardPrice = Number(39);
            }
        }

    } else if (gender === "f") {
        if (sportType === "Gym") {
            if (age <= 19) {
                cardPrice = Number(0.8 * 35);
            } else {
                cardPrice = Number(35);
            }
        } else if (sportType === "Boxing") {
            if (age <= 19) {
                cardPrice = Number(0.8 * 37);
            } else {
                cardPrice = Number(37);
            }

        } else if (sportType === "Yoga") {
            if (age <= 19) {
                cardPrice = Number(0.8 * 42);
            } else {
                cardPrice = Number(42);
            }

        } else if (sportType === "Zumba") {
            if (age <= 19) {
                cardPrice = Number(0.8 * 31);
            } else {
                cardPrice = Number(31);
            }
            
        } else if (sportType === "Dances") {
            if (age <= 19) {
                cardPrice = Number(0.8 * 53);
            } else {
                cardPrice = Number(53);
            }

        } else if (sportType === "Pilates") {
            if (age <= 19) {
                cardPrice = Number(0.8 * 37);
            } else {
                cardPrice = Number(37);
            }
        }
    }

    if (currentSum >= cardPrice) {
        console.log(`You purchased a 1 month pass for ${sportType}.`);
    } else {
        console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
    }
}

fitnessCard(["20", "f", "15", "Yoga"]);