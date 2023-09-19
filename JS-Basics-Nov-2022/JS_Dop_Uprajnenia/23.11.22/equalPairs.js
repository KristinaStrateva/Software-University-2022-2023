function equalPairs(input) {
    let pairsAmount = Number(input[0]);
    let number1 = Number(input[1]);
    let number2 = Number(input[2]);
    
    let equalPairsAmount = 1;
    let maxDifference = Number.NEGATIVE_INFINITY;
    let lastPairValue = number1 + number2;

    for (let i = 3; i <= 2 * pairsAmount; i += 2) {
        let currentNumber1 = Number(input[i]);
        let currentNumber2 = Number(input[i + 1]);

        let currentPairValue = currentNumber1 + currentNumber2;

        if (currentPairValue === lastPairValue) {
            equalPairsAmount++;
        } else {
            let difference = Math.abs(currentPairValue - lastPairValue);
            if (difference > maxDifference) {
                maxDifference = difference;
            }
        }

        lastPairValue = currentPairValue;
    }

    if (equalPairsAmount === pairsAmount) {
        console.log(`Yes, value=${lastPairValue}`);
    } else {
        console.log(`No, maxdiff=${maxDifference}`);
    }
}

equalPairs(["1", "5", "5"]);