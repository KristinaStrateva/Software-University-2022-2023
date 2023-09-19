function grandpaStavri(input) {
    let index = 0;
    let nDays = Number(input[index]);
    index++
    
    let alchoholQuantityCounter = 0;
    let totalAlchoholDegreeCounter = 0;

    for (let i = 1; i <= nDays; i++) {
        let currAlchoholQuantity = Number(input[index]);
        index++;
        let currAlchoholDegree = Number(input[index]);
        index++;

        alchoholQuantityCounter += currAlchoholQuantity;
        totalAlchoholDegreeCounter += currAlchoholQuantity * currAlchoholDegree;
    }

    console.log(`Liter: ${alchoholQuantityCounter.toFixed(2)}`);

    let averageDegrees = totalAlchoholDegreeCounter / alchoholQuantityCounter;
    console.log(`Degrees: ${averageDegrees.toFixed(2)}`);

    if (averageDegrees < 38) {
        console.log("Not good, you should baking!");
    } else if (averageDegrees < 42) {
        console.log("Super!");
    } else {
        console.log("Dilution with distilled water!");
    }
}

grandpaStavri(["3",
"100",
"45",
"50",
"55",
"150",
"36"])