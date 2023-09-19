function bonusSystem(input) {
    let inputNumber = Number(input[0]);
    let bonusPoints1 = 0;
    let bonusPoints2 = 0;

    if (inputNumber <= 100) {
        bonusPoints1 = bonusPoints1 + 5;
    } else if (inputNumber <= 1000) {
        bonusPoints1 = inputNumber * 0.2;
    } else {
        bonusPoints1 = inputNumber * 0.1;
    }

    if (inputNumber % 2 === 0) {
        bonusPoints2 = 1;
    } else if (inputNumber % 10 === 5) {
        bonusPoints2 = 2;
    }

    console.log(bonusPoints1 + bonusPoints2);
    console.log(inputNumber + bonusPoints1 + bonusPoints2);
}

bonusSystem(["175"]);