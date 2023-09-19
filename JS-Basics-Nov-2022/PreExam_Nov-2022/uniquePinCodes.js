function uniquePinCodes(input) {
    let firstNumLimit = Number(input[0]);
    let secondNumLimit = Number(input[1]);
    let thirdNumLimit = Number(input[2]);

    for (let i = 2; i <= firstNumLimit; i += 2) {
        if (i < 2) {
        continue;
        } else {
            for (let j = 2; j <= secondNumLimit; j++) {
                if (j > 7) {
                continue;
                } else if (j !== 4 && j !== 6) {
                    for (let k = 2; k <= thirdNumLimit; k += 2) {
                        if (k < 2) {
                        continue;
                        }
                        
                        let result = `${i} ${j} ${k}`;
                        console.log(result);
                    }
                }
            }
        }
    }
}

uniquePinCodes(["2",
"6",
"2"]);