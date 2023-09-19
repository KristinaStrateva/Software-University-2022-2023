function tennisRanklist(input) {
    let tournamentsAmount = Number(input[0]);
    let startPointsAmount = Number(input[1]);

    let counter = 0;
    let winsCounter = 0;
    let tournamentPoints = 0;

    for (let i = 2; i < input.length; i++) {
        let currentTournamentStage = input[i];

        counter++;

        if (currentTournamentStage === "W") {
            winsCounter++;
            tournamentPoints += 2000;
        } else if (currentTournamentStage === "F") {
            tournamentPoints += 1200;
        } else if (currentTournamentStage === "SF") {
            tournamentPoints += 720;
        }
    }

    let finalPoints = tournamentPoints + startPointsAmount;
    let averagePoints = tournamentPoints / counter;
    let percentWinTournaments = (winsCounter / counter) * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${percentWinTournaments.toFixed(2)}%`);
}

tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"]);