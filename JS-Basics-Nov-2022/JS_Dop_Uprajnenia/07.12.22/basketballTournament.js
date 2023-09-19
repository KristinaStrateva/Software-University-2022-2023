function basketballTournament(input) {
    let index = 0;
    let tournamentName = input[index];
    index++;

    let wonGamesCounter = 0;
    let lostGameCounter = 0;
    let gamesAmount = 0;

    while (tournamentName !== "End of tournaments") {
        let currGamesAmount = Number(input[index]);
        index++;

        let currGameCounter = 0;

        for (let i = 1; i <= currGamesAmount; i++) {
            let pointsDessyTeam = Number(input[index]);
            index++;
            let pointsEnemyTeam = Number(input[index]);
            index++;

            currGameCounter++;

            if (pointsDessyTeam > pointsEnemyTeam) {
                wonGamesCounter++;

                let diff = pointsDessyTeam - pointsEnemyTeam;
                console.log(`Game ${currGameCounter} of tournament ${tournamentName}: win with ${diff} points.`);
            } else if (pointsDessyTeam < pointsEnemyTeam) {
                lostGameCounter++;

                let diff = pointsEnemyTeam - pointsDessyTeam;
                console.log(`Game ${currGameCounter} of tournament ${tournamentName}: lost with ${diff} points.`);
            }
        }

        gamesAmount += currGameCounter;

        tournamentName = input[index];
        index++;
    }

    let percentWonGames = (wonGamesCounter / gamesAmount) * 100;
    let percentLostGames = (lostGameCounter / gamesAmount) * 100;

    console.log(`${percentWonGames.toFixed(2)}% matches win`);
    console.log(`${percentLostGames.toFixed(2)}% matches lost`);
}

basketballTournament([
    "Ballers",
    "3",
    "87",
    "63",
    "56",
    "65",
    "75",
    "64",
    "Sharks",
    "4",
    "64",
    "76",
    "65",
    "86",
    "68",
    "99",
    "45",
    "78",
    "End of tournaments"
]);