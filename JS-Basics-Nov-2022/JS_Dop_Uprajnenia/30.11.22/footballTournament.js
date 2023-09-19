function footballTournament(input) {
    let index = 0;
    let teamName = input[index];
    index++;
    let playedGames = Number(input[index]);
    index++;
    let result = input[index];

    let wPoints = 0;
    let dPoints = 0;
    let lPoints = 0;
    let totalPoints = 0;
    
    if (playedGames === 0) {
        console.log(`${teamName} hasn't played any games during this season.`);
    return;
    }

    for (let i = index; i <= playedGames + 1; i++){
        result = input[i];

        if (result === "W") {
            wPoints++;
            totalPoints += 3;
        } else if (result === "D") {
            dPoints++;
            totalPoints += 1;
        } else if (result === "L") {
            lPoints++;
            totalPoints += 0;
        }
    }

    let winRatePercent = (wPoints / playedGames) * 100;

    console.log(`${teamName} has won ${totalPoints} points during this season.`);
    console.log("Total stats:");
    console.log(`## W: ${wPoints}`);
    console.log(`## D: ${dPoints}`);
    console.log(`## L: ${lPoints}`);
    console.log(`Win rate: ${winRatePercent.toFixed(2)}%`);
}

footballTournament(["Chelsea",
"0"]);