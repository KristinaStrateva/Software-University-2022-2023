function darts(input) {
    let index = 0;
    let playerName = input[index];
    index++;
    let hitArea = input[index];
    index++;

    let totalPoints = 301;
    let successfulShots = 0;
    let unsuccessfulShots = 0;

    while (hitArea !== "Retire") {
        let currentPoints = Number(input[index]);
        index++;

        let totalCurrPoints = 0;

        if (hitArea === "Single") {
            totalCurrPoints = currentPoints;
            totalPoints -= totalCurrPoints;
        } else if (hitArea === "Double") {
            totalCurrPoints = currentPoints * 2
            totalPoints -= totalCurrPoints;
        } else if (hitArea === "Triple") {
            totalCurrPoints = currentPoints * 3;
            totalPoints -= totalCurrPoints;
        }

        if (totalPoints === 0) {
            successfulShots++;

            console.log(`${playerName} won the leg with ${successfulShots} shots.`);
        return;
        } else if (totalPoints < 0) {
            unsuccessfulShots++;
        
            totalPoints += totalCurrPoints;

            hitArea = input[index];
            index++;
        continue;
        } else {
            successfulShots++;
        }

        hitArea = input[index];
        index++;
    }

    console.log(`${playerName} retired after ${unsuccessfulShots} unsuccessful shots.`);
}

darts(["Rob Cross",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"20",
"Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"]);