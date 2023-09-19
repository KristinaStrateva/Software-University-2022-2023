function sumOfTwoNumbers(input) {
    let firstNumber = Number(input[0]);
    let lastNumber = Number(input[1]);
    let magicNumber = input[2];
    
    let counter = 0;
    let checkForMagicNumber = 0;

    for (let i = firstNumber; i <= lastNumber; i++) {
        for (let j = firstNumber; j <= lastNumber; j++) {
            counter++;
            checkForMagicNumber = i + j;
            if (checkForMagicNumber == magicNumber) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
            return;
            } else {
            continue;
            }
        }
    }

    console.log(`${counter} combinations - neither equals ${magicNumber}`);
}

sumOfTwoNumbers(["88", "888", "2000"]);