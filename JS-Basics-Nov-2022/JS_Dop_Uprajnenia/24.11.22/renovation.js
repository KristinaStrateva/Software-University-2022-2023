function renovation(input) {
    let wallHeight = Number(input[0]);
    let wallWeight = Number(input[1]);
    let notPaintedAreaPercent = Number(input[2]);

    let notPaintedArea = notPaintedAreaPercent / 100;
    let totalWallsArea = 4 * wallHeight * wallWeight;
    let totalWallsAreaForPainting = totalWallsArea - (notPaintedArea * totalWallsArea);
    let currentPaintedArea = 0;
    let currentPaintAmount = 0;

    for (let i = 3; i <= input.length - 1; i++) {
        currentPaintAmount = input[i];
        if (currentPaintAmount === "Tired!") {
            let areaLeft = totalWallsAreaForPainting - currentPaintedArea;
            console.log(`${Math.ceil(areaLeft)} quadratic m left.`);
            return;
        } else {
            currentPaintAmount = Number(input[i]);    

            currentPaintedArea += currentPaintAmount;
        }
    }

    if (currentPaintedArea > totalWallsAreaForPainting) {
        console.log(`All walls are painted and you have ${currentPaintedArea - totalWallsAreaForPainting} l paint left!`);
    } else if (currentPaintedArea === totalWallsAreaForPainting) {
        console.log(`All walls are painted! Great job, Pesho!`);
    }
}

renovation(["3",
"5",
"10",
"2",
"3",
"4",
"Tired!"])
;