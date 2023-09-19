function fitnessCard(input) {
    let currentSum = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sportType = input[3];

    if (gender === "m") {
        if (sportType === "Gym") {
            if (age <= 19) {
                let cardPrice = Number(0.8 * 42);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            } else {
                let cardPrice = Number(42);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            }

        } else if (sportType === "Boxing") {
            if (age <= 19) {
                let cardPrice = Number(0.8 * 41);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            } else {
                let cardPrice = Number(41);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            }

        } else if (sportType === "Yoga") {
            if (age <= 19) {
                let cardPrice = Number(0.8 * 45);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            } else {
                let cardPrice = Number(45);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            }

        } else if (sportType === "Zumba") {
            if (age <= 19) {
                let cardPrice = Number(0.8 * 34);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            } else {
                let cardPrice = Number(34);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            }

        } else if (sportType === "Dances") {
            if (age <= 19) {
                let cardPrice = Number(0.8 * 51);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            } else {
                let cardPrice = Number(51);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            }

        } else if (sportType === "Pilates") {
            if (age <= 19) {
                let cardPrice = Number(0.8 * 39);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            } else {
                let cardPrice = Number(39);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            }
        }

    } else if (gender === "f") {
        if (sportType === "Gym") {
            if (age <= 19) {
                let cardPrice = Number(0.8 * 35);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            } else {
                let cardPrice = Number(35);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            }
        } else if (sportType === "Boxing") {
            if (age <= 19) {
                let cardPrice = Number(0.8 * 37);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            } else {
                let cardPrice = Number(37);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            }

        } else if (sportType === "Yoga") {
            if (age <= 19) {
                let cardPrice = Number(0.8 * 42);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            } else {
                let cardPrice = Number(42);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            }

        } else if (sportType === "Zumba") {
            if (age <= 19) {
                let cardPrice = Number(0.8 * 31);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            } else {
                let cardPrice = Number(31);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            }
            
        } else if (sportType === "Dances") {
            if (age <= 19) {
                let cardPrice = Number(0.8 * 53);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            } else {
                let cardPrice = Number(53);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            }

        } else if (sportType === "Pilates") {
            if (age <= 19) {
                let cardPrice = Number(0.8 * 37);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            } else {
                let cardPrice = Number(37);
                if (currentSum >= cardPrice) {
                    console.log(`You purchased a 1 month pass for ${sportType}.`);
                } else {
                    console.log(`You don't have enough money! You need $${(cardPrice - currentSum).toFixed(2)} more.`);
                }
            }
        }
    }
}


fitnessCard(["10", "m", "50", "Pilates"]);