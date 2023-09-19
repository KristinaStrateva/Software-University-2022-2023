function greatestDivisor(num1, num2) {
    let greatestDivisorNum = 0;
    let minNum = Math.min(num1, num2);

    for (let i = 1; i <= minNum; i++) {
        
        if (num1 % i === 0 && num2 % i === 0) {
            greatestDivisorNum = i;
        }
    }

    console.log(greatestDivisorNum);
}

greatestDivisor(2154, 458);