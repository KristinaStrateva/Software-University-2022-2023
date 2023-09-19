function uniquePinCodes(input) {
    let index = 0;
    let firstLimit = Number(input[index]);
    index++;
    let secondLimit = Number(input[index]);
    index++;
    let thirdLimit = Number(input[index]);

    for (let i = 2; i <= firstLimit; i += 2) {
        if (i < 2) {
        continue;
        }
        for (let j = 2; j <= secondLimit; j++) {
            if (j > 7) {
            continue;
            } else if (j !== 4 && j !== 6) {
                for (let k = 2; k <= thirdLimit; k += 2) {
                    if (k < 2) {
                    continue;
                    }
                    console.log(`${i} ${j} ${k}`);
                }
            }
        }
    }
}

uniquePinCodes(["9", "9", "9"]);