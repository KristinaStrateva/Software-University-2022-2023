function easterEggs(input) {
    let eggsAmount = Number(input[0]);
    let eggsColor = input[1];
    
    let redCounter = 0;
    let orangeCounter = 0;
    let blueCounter = 0;
    let greenCounter = 0;
    let maxEggs = Number.MIN_SAFE_INTEGER;
    let maxEggsColor = "";

    for (let i = 1; i <= eggsAmount; i++) {
        eggsColor = input[i];

        if (eggsColor === "red") {
            redCounter++;

            if (redCounter > maxEggs) {
                maxEggs = redCounter;
                maxEggsColor = eggsColor;
            }

        } else if (eggsColor === "orange") {
            orangeCounter++;

            if (orangeCounter > maxEggs) {
                maxEggs = orangeCounter;
                maxEggsColor = eggsColor;
            }

        } else if (eggsColor === "blue") {
            blueCounter++;

            if (blueCounter > maxEggs) {
                maxEggs = blueCounter;
                maxEggsColor = eggsColor;
            }

        } else if (eggsColor === "green") {
            greenCounter++;

            if (greenCounter > maxEggs) {
                maxEggs = greenCounter;
                maxEggsColor = eggsColor;
            }
        }
    }

    console.log(`Red eggs: ${redCounter}`);
    console.log(`Orange eggs: ${orangeCounter}`);
    console.log(`Blue eggs: ${blueCounter}`);
    console.log(`Green eggs: ${greenCounter}`);
    console.log(`Max eggs: ${maxEggs} -> ${maxEggsColor}`);
}

easterEggs(["4",
"blue",
"red",
"blue",
"orange"]);