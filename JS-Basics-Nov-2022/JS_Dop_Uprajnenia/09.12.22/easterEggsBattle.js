function easterEggsBattle(input) {
    let index = 0;
    let eggsAmountPlayer1 = Number(input[index]);
    index++;
    let eggsAmountPlayer2 = Number(input[index]);
    index++;
    let currentWinner = input[index];
    index++;

    let isOutOfEggs = false;

    while (currentWinner !== "End") {
        if (currentWinner === "one") {
            eggsAmountPlayer2--;
        } else if (currentWinner === "two") {
            eggsAmountPlayer1--;
        }

        if (eggsAmountPlayer1 === 0) {
            isOutOfEggs = true;

        break;
        } else if (eggsAmountPlayer2 === 0) {
            isOutOfEggs = true;

        break;
        }

        currentWinner = input[index];
        index++;
    }

    if (isOutOfEggs) {
        if (eggsAmountPlayer1 === 0) {
            console.log(`Player one is out of eggs. Player two has ${eggsAmountPlayer2} eggs left.`);
        } else if (eggsAmountPlayer2 === 0) {
            console.log(`Player two is out of eggs. Player one has ${eggsAmountPlayer1} eggs left.`);
        }
    } else {
        console.log(`Player one has ${eggsAmountPlayer1} eggs left.`);
        console.log(`Player two has ${eggsAmountPlayer2} eggs left.`);
    }
}

easterEggsBattle(["6", "3", "one", "two", "two", "one", "one"]);