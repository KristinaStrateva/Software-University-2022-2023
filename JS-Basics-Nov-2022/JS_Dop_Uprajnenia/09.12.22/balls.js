function balls(input) {
    let ballsAmount = Number(input[0]);

    let redCounter = 0;
    let orangeCounter = 0;
    let yellowCounter = 0;
    let whiteCounter = 0;
    let blackCounter = 0;
    let othersCounter =0;

    let totalPoints = 0;

    for (let i = 1; i <= ballsAmount; i++) {
        let currBallColor = input[i];

        switch (currBallColor) {
            case "red":
                redCounter++;
                totalPoints += 5;
            break;
            case "orange":
                orangeCounter++;
                totalPoints += 10;
            break;
            case "yellow":
                yellowCounter++;
                totalPoints += 15;
            break;
            case "white":
                whiteCounter++;
                totalPoints += 20;
            break;
            case "black":
                blackCounter++;
                totalPoints = Math.floor(totalPoints / 2);
            break;
            default:
                othersCounter++;
            break;
        }
    }

    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${redCounter}`);
    console.log(`Orange balls: ${orangeCounter}`);
    console.log(`Yellow balls: ${yellowCounter}`);
    console.log(`White balls: ${whiteCounter}`);
    console.log(`Other colors picked: ${othersCounter}`);
    console.log(`Divides from black balls: ${blackCounter}`);
}

balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"]);