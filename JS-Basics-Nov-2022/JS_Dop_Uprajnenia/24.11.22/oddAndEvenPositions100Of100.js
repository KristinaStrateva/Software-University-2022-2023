function oddAndEvenPositions(input) {
    let positionsAmount = Number(input[0]);

    let maxNumOdd = Number.NEGATIVE_INFINITY;
    let minNumOdd = Number.POSITIVE_INFINITY;
    let maxNumEven = Number.NEGATIVE_INFINITY;
    let minNumEven = Number.POSITIVE_INFINITY;
    let sumNumOdd = 0;
    let sumNumEven = 0;

    for (let i = 1; i <= positionsAmount; i++) {
        if (i % 2 !== 0) {
            let currentOddPositionNumber = Number(input[i]);

            if (currentOddPositionNumber < minNumOdd) {
                minNumOdd = currentOddPositionNumber;
            }

            if (currentOddPositionNumber > maxNumOdd) {
                maxNumOdd = currentOddPositionNumber;
            }

            sumNumOdd += currentOddPositionNumber;
        } else {
            let currentEvenPositionNumber = Number(input[i]);

            if (currentEvenPositionNumber < minNumEven) {
                minNumEven = currentEvenPositionNumber;
            }

            if (currentEvenPositionNumber > maxNumEven) {
                maxNumEven = currentEvenPositionNumber;
            }

            sumNumEven += currentEvenPositionNumber;
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