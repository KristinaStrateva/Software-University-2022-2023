function minNumber(input) {
    let index = 0;
    let number = input[index];

    let minNumber = Number.MAX_SAFE_INTEGER;

    while (number !== "Stop") {
        let currentNumber = Number(number);

        if (currentNumber < minNumber) {
            minNumber = currentNumber;
        }

        number = input[index];
        index++;
    }

    console.log(minNumber);
}

minNumber(["-1", "-2", "Stop"]);