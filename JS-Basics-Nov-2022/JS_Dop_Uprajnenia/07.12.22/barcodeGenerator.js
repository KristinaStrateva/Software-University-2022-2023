function barcodeGenerator(input) {
    let firstNum = input[0];
    let lastNum = input[1];

    let finalResult = ``;

    for (let i = firstNum[0]; i <= lastNum[0]; i++) {
        let iNum = Number(i);

        for (let j = firstNum[1]; j <= lastNum[1]; j++) {
            let jNum = Number(j);

            for (let k = firstNum[2]; k <= lastNum[2]; k++) {
                let kNum = Number(k);

                for (let l = firstNum[3]; l <= lastNum[3]; l++) {
                    let lNum = Number(l);

                    if (iNum % 2 !== 0 && jNum % 2 !== 0 && kNum % 2 !== 0 && lNum % 2 !== 0) {
                        let result = `${i}${j}${k}${l} `;

                        finalResult += result;
                    } else {
                    continue;
                    }
                }
            }
        }
    }

    console.log(finalResult);
}

barcodeGenerator([2345, 6789]);