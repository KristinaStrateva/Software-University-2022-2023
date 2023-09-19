function christmasTournament(input) {
    let index = 0;
    let daysAmount = Number(input[index]);
    index++;
    let sportType = input[index];
    index++;

    let winCounter = 0;
    let loseCounter = 0;

    let totalRaisedMoney = 0;
    
    for (let i = 1; i <= daysAmount; i++) {

        let currentDayRaisedMoney = 0;
        let currentWins = 0;
        let currentLoses = 0;

        while (sportType !== "Finish") {
            let result = input[index];
            index++;

            if (result === "win") {
                currentDayRaisedMoney += 20;
                currentWins++;
                winCounter++;
            } else if (result === "lose") {
                currentLoses++;
                loseCounter++;
            }

            sportType = input[index];
            index++;
        }

        if (currentWins > currentLoses) {
            currentDayRaisedMoney *= 1.1;
        }

        totalRaisedMoney += currentDayRaisedMoney;

        sportType = input[index];
        index++;
    }

    if (winCounter > loseCounter) {
        totalRaisedMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalRaisedMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalRaisedMoney.toFixed(2)}`);
    }
}

christmasTournament(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"]);