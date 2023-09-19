function oddAndEvenPositions(input) {
    let positionsAmount = Number(input[0]);

    let maxNumOdd = Number.NEGATIVE_INFINITY;
    let minNumOdd = Number.POSITIVE_INFINITY;
    let maxNumEven = Number.NEGATIVE_INFINITY;
    let minNumEven = Number.POSITIVE_INFINITY;
    let sumNumOdd = 0;
    let sumNumEven = 0;
    let lastPositionNumOdd = 0;
    let lastPositionNumEven = 0;

    for (let i = 1; i <= positionsAmount; i += 2) {
        let currentOddPositionNumber = Number(input[i]);

        if (currentOddPositionNumber < minNumOdd) {
            minNumOdd = currentOddPositionNumber;
        }

        if (lastPositionNumOdd > currentOddPositionNumber) {
            maxNumOdd = lastPositionNumOdd;
        } else if (currentOddPositionNumber > maxNumOdd) {
            maxNumOdd = currentOddPositionNumber;
        } else if (currentOddPositionNumber === minNumOdd || currentOddPositionNumber === maxNumOdd) {
            maxNumOdd = currentOddPositionNumber;
        } else if (minNumOdd === Number.POSITIVE_INFINITY || maxNumOdd === Number.NEGATIVE_INFINITY) {
            sumNumOdd = 0;
        }

        sumNumOdd += currentOddPositionNumber;

        lastPositionNumOdd = currentOddPositionNumber;

        if (positionsAmount <= 2) {
            maxNumOdd = minNumOdd;
        }

        if (i === positionsAmount && i % 2 !== 0) {
            break;
        }

        let currentEvenPositionNumber = Number(input[i + 1]);

        if (currentEvenPositionNumber < minNumEven) {
            minNumEven = currentEvenPositionNumber;
        }

        if (lastPositionNumEven > currentEvenPositionNumber) {
            maxNumEven = lastPositionNumEven;
        } else if (currentEvenPositionNumber >= maxNumEven) {
            maxNumEven = currentEvenPositionNumber;
        } else if (currentOddPositionNumber === minNumEven || currentOddPositionNumber === maxNumEven) {
            maxNumEven = currentOddPositionNumber;
        } else if (minNumEven === Number.POSITIVE_INFINITY || maxNumEven === Number.NEGATIVE_INFINITY) {
            sumNumEven = 0;
        }

        sumNumEven += currentEvenPositionNumber;

        lastPositionNumEven = currentEvenPositionNumber;

        if (positionsAmount <= 3) {
            maxNumEven = minNumEven;
        }
    }

    if (sumNumOdd !== 0) {
        console.log(`OddSum=${sumNumOdd.toFixed(2)},`);
        console.log(`OddMin=${minNumOdd.toFixed(2)},`);
        console.log(`OddMax=${maxNumOdd.toFixed(2)},`);
    } else {
        console.log(`OddSum=${sumNumOdd.toFixed(2)},`);
        console.log("OddMin=No,");
        console.log("OddMax=No,");
    }

    if (sumNumEven !== 0) {
        console.log(`EvenSum=${sumNumEven.toFixed(2)},`);
        console.log(`EvenMin=${minNumEven.toFixed(2)},`);
        console.log(`EvenMax=${maxNumEven.toFixed(2)}`);
    } else {
        console.log(`EvenSum=${sumNumEven.toFixed(2)},`);
        console.log("EvenMin=No,");
        console.log("EvenMax=No");
    }
}

oddAndEvenPositions(["10", "-4.5", "3433.5", "-180.33", "323.2", "-55.55", "28.28", "-30.30", "44.44", "-77.77", "88.88"]);