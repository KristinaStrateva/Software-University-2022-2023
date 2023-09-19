function oscarsNominee(input) {
    let actorName = input[0];
    let pointsFromAcademy = Number(input[1]);

    for (let i = 3; i < input.length; i += 2) {
        let evaluatorName = input[i];
        let pointsFromEvaluator = Number(input[i + 1]);

        let totalPointsFromEvaluator = (evaluatorName.length * pointsFromEvaluator) / 2;
        pointsFromAcademy += totalPointsFromEvaluator;        

        if (pointsFromAcademy > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${pointsFromAcademy.toFixed(1)}!`);
            return;
        }
    }

    let pointsNeeded = 1250.5 - pointsFromAcademy;
        console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);
}

oscarsNominee(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);