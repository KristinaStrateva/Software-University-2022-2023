function gameOfIntervals(input) {
    let gameMovesAmount = Number(input[0]);

    let result = 0;
    let invalidNumbersAmount = 0;
    let numbersFrom0To9Amount = 0;
    let numbersFrom10To19Amount = 0;
    let numbersFrom20To29Amount = 0;
    let numbersFrom30To39Amount = 0;
    let numbersFrom40To50Amount = 0;

    for (let i = 1; i <= gameMovesAmount; i++) {
        let currentNumber = Number(input[i]);

        if (currentNumber < 0 || currentNumber > 50) {
            result = result / 2;
            invalidNumbersAmount++;
        } else if (currentNumber < 10) {
            result += 0.2 * currentNumber;
            numbersFrom0To9Amount++;
        } else if (currentNumber < 20) {
            result += 0.3 * currentNumber;
            numbersFrom10To19Amount++;
        } else if (currentNumber < 30) {
            result += 0.4 * currentNumber;
            numbersFrom20To29Amount++;
        } else if (currentNumber < 40) {
            result += 50;
            numbersFrom30To39Amount++;
        } else {
            result += 100;
            numbersFrom40To50Amount++;
        }
    }

    let numbersFrom0To9AmountPercent = (numbersFrom0To9Amount / gameMovesAmount) * 100;
    let numbersFrom10To19AmountPercent = (numbersFrom10To19Amount / gameMovesAmount) * 100;
    let numbersFrom20To29AmountPercent = (numbersFrom20To29Amount / gameMovesAmount) * 100;
    let numbersFrom30To39AmountPercent = (numbersFrom30To39Amount / gameMovesAmount) * 100;
    let numbersFrom40To50AmountPercent = (numbersFrom40To50Amount / gameMovesAmount) * 100;
    let invalidNumbersAmountPercent = (invalidNumbersAmount / gameMovesAmount) * 100;

    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${numbersFrom0To9AmountPercent.toFixed(2)}%`);
    console.log(`From 10 to 19: ${numbersFrom10To19AmountPercent.toFixed(2)}%`);
    console.log(`From 20 to 29: ${numbersFrom20To29AmountPercent.toFixed(2)}%`);
    console.log(`From 30 to 39: ${numbersFrom30To39AmountPercent.toFixed(2)}%`);
    console.log(`From 40 to 50: ${numbersFrom40To50AmountPercent.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalidNumbersAmountPercent.toFixed(2)}%`);
}

gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);