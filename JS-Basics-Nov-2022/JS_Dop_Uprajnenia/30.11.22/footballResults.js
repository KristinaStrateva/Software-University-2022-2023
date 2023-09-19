function footballResults(input) {
    let result1 = input[0];
    let result2 = input[1];
    let result3 = input[2];

    let scoreHome1 = Number(result1.charAt(0));
    let scoreGuest1 = Number(result1.charAt(2));

    let scoreHome2 = Number(result2.charAt(0));
    let scoreGuest2 = Number(result2.charAt(2));

    let scoreHome3 = Number(result3.charAt(0));
    let scoreGuest3 = Number(result3.charAt(2));

    let wins = 0;
    let losses = 0;
    let drawns = 0;

    if (scoreHome1 > scoreGuest1) {
        wins++;
    } else if (scoreHome1 < scoreGuest1) {
        losses++;
    } else {
        drawns++;
    }

    if (scoreHome2 > scoreGuest2) {
        wins++;
    } else if (scoreHome2 < scoreGuest2) {
        losses++;
    } else {
        drawns++;
    }

    if (scoreHome3 > scoreGuest3) {
        wins++;
    } else if (scoreHome3 < scoreGuest3) {
        losses++;
    } else {
        drawns++;
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${losses} games.`);
    console.log(`Drawn games: ${drawns}`);
}

footballResults(["0:2", "0:1", "3:3"]);