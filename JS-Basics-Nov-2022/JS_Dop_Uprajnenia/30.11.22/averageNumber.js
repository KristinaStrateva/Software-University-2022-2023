function averageNumber(input) {
    let numberAmount = Number(input[0]);
    let totalSum = 0;

    for (let i = 1; i <= numberAmount; i++) {
        let currentNumber = Number(input[i]);

        totalSum += currentNumber;
    }

    let averageNumber = totalSum / numberAmount;
    console.log(averageNumber.toFixed(2));
}

averageNumber(["4", "95", "23", "76", "23"]);