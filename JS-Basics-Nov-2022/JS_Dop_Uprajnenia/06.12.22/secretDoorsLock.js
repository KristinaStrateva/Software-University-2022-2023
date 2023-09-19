function secretDoorsLock(input) {
    let firstNumLimit = Number(input[0]);
    let secondNumLimit = Number(input[1]);
    let thirdNumLimit = Number(input[2]);

    for (let firstNum = 2; firstNum <= firstNumLimit; firstNum += 2) {
        for (let secondNum = 2; secondNum <= secondNumLimit; secondNum++) {
            if (secondNum === 2 || secondNum === 3 || secondNum === 5 || secondNum === 7) {
                for (let thirdNum = 2; thirdNum <= thirdNumLimit; thirdNum += 2) {

                    console.log(`${firstNum} ${secondNum} ${thirdNum}`);
                }

            } else {
            continue;
            }
        }
    } 
}

secretDoorsLock(["3", "5", "5"]);