function profit(input) {
    let coins1Amount = Number(input[0]);
    let coins2Amount = Number(input[1]);
    let money5Amount = Number(input[2]);
    let sumToCheck = Number(input[3]);

    for (let coin1 = 0; coin1 <= sumToCheck; coin1++) {

        for (let coin2 = 0; coin2 <= sumToCheck; coin2++) {
            
            for (let money5 = 0; money5 <= sumToCheck; money5++) {
                
                let currentSum = (coin1 * 1) + (coin2 * 2) + (money5 * 5);

                if (coin1 > coins1Amount || coin2 > coins2Amount || money5 > money5Amount) {
                continue;
                }

                if (currentSum !== sumToCheck) {
                continue;
                } else {
                    console.log(`${coin1} * 1 lv. + ${coin2} * 2 lv. + ${money5} * 5 lv. = ${sumToCheck} lv.`);
                }
            }
        }
    }
}

profit(["5", "3", "1", "7"]);