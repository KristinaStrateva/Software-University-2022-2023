function easterCompetition(input) {
    let index = 0;
    let easterCakesAmount = input[index];
    index++;
    
    let bestResult = Number.MIN_SAFE_INTEGER;
    let bestBakerName = "";

    for (let i = 1; i <= easterCakesAmount; i++) {
        let bakerName = input[index];
        index++;
        let review = input[index];
        index++;

        let result = 0;

        while(review !== "Stop") {
            review = Number(review);

            result += review;

            review = input[index];
            index++;
        }

        console.log(`${bakerName} has ${result} points.`);

        if (result > bestResult) {
            bestResult = result;
            bestBakerName = bakerName;

            console.log(`${bestBakerName} is the new number 1!`);
        }
    }

    console.log(`${bestBakerName} won competition with ${bestResult} points!`);
}

easterCompetition(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"]);