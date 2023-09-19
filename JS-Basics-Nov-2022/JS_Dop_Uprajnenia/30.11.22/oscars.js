function oscars(input) {
    let index = 0;
    let actorName = input[index];
    index++;
    let pointsFromAcademy = Number(input[index]);
    index++;
    let evaluatorsAmount = Number(input[index]);
    index++;

    let i = index;

    while (i <= (evaluatorsAmount * 2) + 2) {
        let evaluatorName = input[index];
        index++;
        let pointsFromEvaluator = Number(input[index]);
        index++;

        let totalPointsFromEvaluator = (evaluatorName.length * pointsFromEvaluator) / 2;
        pointsFromAcademy += totalPointsFromEvaluator;        

        if (pointsFromAcademy > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${pointsFromAcademy.toFixed(1)}!`);
            return;
        }

        i = index;
    }

    let pointsNeeded = 1250.5 - pointsFromAcademy;
        console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);
}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"]);