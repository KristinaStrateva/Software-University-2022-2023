function carNumber(input) {
    let firstNumber = Number(input[0]);
    let lastNumber = Number(input[1]);

    let finalResult = ``;

    for (let num1 = firstNumber; num1 <= lastNumber; num1++) {
        for (let num2 = firstNumber; num2 <= lastNumber; num2++) {
            for (let num3 = firstNumber; num3 <= lastNumber; num3++) {
                for (let num4 = firstNumber; num4 <= lastNumber; num4++) {
                    if (((num1 % 2 === 0 && num4 % 2 !== 0) || (num1 % 2 !== 0 && num4 % 2 === 0)) && num1 > num4 && (num2 + num3) % 2 === 0) {
                        let result = `${num1}${num2}${num3}${num4}`;

                        finalResult += `${result} `;
                    }
                }
            }
        }
    }

    console.log(finalResult);
}

carNumber(["3", "5"]);