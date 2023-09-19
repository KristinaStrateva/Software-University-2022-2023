function histogram(input) {
    let numbersAmount = Number(input[0]);

    let currentNumber = 0;
    let p1Amount = 0;
    let p2Amount = 0;
    let p3Amount = 0;
    let p4Amount = 0;
    let p5Amount = 0;

    for (let i = 1; i <= numbersAmount; i++) {
        currentNumber = Number(input[i]);
        if (currentNumber < 200) {
            p1Amount++;
        } else if (currentNumber >= 200 && currentNumber <= 399) {
            p2Amount++;
        } else if (currentNumber >= 400 && currentNumber <= 599) {
            p3Amount++;
        } else if (currentNumber >= 600 && currentNumber <= 799) {
            p4Amount++;
        } else {
            p5Amount++;
        }
    }

    let p1 = (p1Amount / numbersAmount) * 100;
    let p2 = (p2Amount / numbersAmount) * 100;
    let p3 = (p3Amount / numbersAmount) * 100;
    let p4 = (p4Amount / numbersAmount) * 100;
    let p5 = (p5Amount / numbersAmount) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}

histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"]);