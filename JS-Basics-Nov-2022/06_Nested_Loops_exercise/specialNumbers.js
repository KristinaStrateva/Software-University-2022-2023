function specialNumbers(input) {
    let n = Number(input[0]);

    let result = ``;

    for (let i = 1111; i <= 9999; i++) {
        let currentI = Number(i);
        let iString = currentI.toString();

        let isMagic = true;
        let magicNumber = ``;

        for (let j = 0; j < iString.length; j++) {
            let currentNumber = Number(iString[j]);
            
            if (n % currentNumber !== 0) {
                isMagic = false;
            }
        }

        if (isMagic) {
            magicNumber = currentI;
        } else {
        continue;
        }

        result += `${magicNumber} `;
    }

    console.log(result);
}

specialNumbers(["3"]);