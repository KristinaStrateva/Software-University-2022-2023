function footballResults(input) {
    let index = 0;

    let wins = 0;
    let losses = 0;
    let drawns = 0;

    for (let i = index; i <= input.length - 1; i++) {
        let result = input[i];

        let resultHome = Number(result.charAt(0));
        let resultGuest = Number(result.charAt(2));

        if (resultHome > resultGuest) {
            wins++;
        } else if (resultHome < resultGuest) {
            losses++;
        } else {
            drawns++;
        }
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${losses} games.`);
    console.log(`Drawn games: ${drawns}`);
}

footballResults(["0:2", "0:1", "3:3"]);