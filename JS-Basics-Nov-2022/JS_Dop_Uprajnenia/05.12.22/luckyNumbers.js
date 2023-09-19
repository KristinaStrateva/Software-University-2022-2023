function luckyNumbers(input) {
    let number = Number(input[0]);

    let finalResult = ``;

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    if ((i + j === k + l) && number % (i + j) === 0) {
                        let result = `${i}${j}${k}${l}`;
                        finalResult += `${result} `;
                    } else {
                    continue;
                    }
                }
            }
        }
    }

    console.log(finalResult);
}

luckyNumbers(["7"]);