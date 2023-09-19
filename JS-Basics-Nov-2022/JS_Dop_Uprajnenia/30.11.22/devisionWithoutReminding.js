function devisionWithoutReminding(input) {
    let index = 0;
    let numbersAmount = Number(input[index]);
    index++;

    let i = index;

    let p1Amount = 0;
    let p2Amount = 0;
    let p3Amount = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    while (i <= numbersAmount) {
        let currentNumber = Number(input[index]);
        index++;

        if (currentNumber % 2 === 0) {
            p1Amount++;
            p1 = (p1Amount / numbersAmount) * 100;
        }
        
        if (currentNumber % 3 === 0) {
            p2Amount++;
            p2 = (p2Amount / numbersAmount) * 100;
        }
        
        if (currentNumber % 4 === 0) {
            p3Amount++;
            p3 = (p3Amount / numbersAmount) * 100;
        }

        i = index;
    }

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
}

devisionWithoutReminding([
    "3",
    "3",
    "6",
    "9"
]);