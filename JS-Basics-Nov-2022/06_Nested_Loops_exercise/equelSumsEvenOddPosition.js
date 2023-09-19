function equalSumOddEvenPositions(input) {
    let firstNumber = Number(input[0]);
    let lastNumber = Number(input[1]);

    let result = "";

    for (let currentNumber = firstNumber; currentNumber <= lastNumber; currentNumber++) {
        let currentNumberToString = currentNumber.toString();

        let oddSum = 0;
        let evenSum = 0;

        for (let i = 0; i < currentNumberToString.length; i++) {
            let currentDigit = Number(currentNumberToString[i]);

            let position = i + 1;

            if (position % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }

        if (evenSum === oddSum) {
            result += `${currentNumber} `;
        }
    }

    console.log(result);
}

equalSumOddEvenPositions(["100000", "100050"]);