function nameGame(input) {
    let index = 0;
    let name = input[index];
    index++;

    let score = 0;

    let winnerScore = Number.MIN_SAFE_INTEGER;
    let looserScore = Number.MAX_SAFE_INTEGER;

    while (name !== "Stop") {
        score = 0;

        for (let i = 0; i < name.length; i++) {
            let num = Number(input[index]);
            index++;

            let currentLetter = name[i];
            let currentLetterCharCode = currentLetter.charCodeAt(name);

            let points = 0;

            if (num === currentLetterCharCode) {
                points = 10;
            } else {
                points = 2;
            }

            score += points;
        }

        if (score > winnerScore) {
            winner = name;
            winnerScore = score;
        }

        if (score <= looserScore) {
            looser = name;
            looserScore = score;
        }

        name = input[index];
        index++;
    }

    if (winnerScore === looserScore) {
        winner = looser;
    }

    console.log(`The winner is ${winner} with ${winnerScore} points!`);
}

nameGame(["Pesho",
"124",
"34",
"111",
"97",
"99",
"Gosho",
"98",
"124",
"88",
"76",
"18",
"Stop"]);