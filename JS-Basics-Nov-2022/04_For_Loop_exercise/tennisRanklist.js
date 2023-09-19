function tennisRanklist(input) {
    let playedTournaments = Number(input[0]);
    let ranklistPoints = Number(input[1]);

    let endingTournamentPositionAmount = 0;
    let earnedPoints = 0;

    for (let i = 2; i <= playedTournaments + 1; i++) {
        let endingTournamentPosition = input[i];;

        if (endingTournamentPosition === "W") {
            earnedPoints += 2000;
            endingTournamentPositionAmount++;
        } else if (endingTournamentPosition === "F") {
            earnedPoints += 1200;
        } else if (endingTournamentPosition === "SF") {
            earnedPoints += 720;
        }
    }

    let totalPoints = ranklistPoints + earnedPoints;
    let averageEarnedPoints = earnedPoints / playedTournaments;
    let wonTournamentsPercent = (endingTournamentPositionAmount / playedTournaments) * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averageEarnedPoints)}`);
    console.log(`${wonTournamentsPercent.toFixed(2)}%`);
}

tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);