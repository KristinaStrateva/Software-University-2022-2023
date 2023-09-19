function maxNumber(input) {
    let index = 0;
    let number = input[index];
    index++;

    let maxNumber = input[0];

    while (number !== "Stop") {
        let currentNumber = Number(number);

        if (currentNumber > maxNumber) {
            maxNumber = currentNumber;
        }

        number = input[index];
        index++;
    }

    console.log(maxNumber);
}

maxNumber(["-1", "-2", "Stop"]);