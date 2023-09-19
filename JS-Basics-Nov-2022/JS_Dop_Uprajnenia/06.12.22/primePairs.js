function primePairs(input) {
    let beginningOfFirstPair = Number(input[0]);
    let beginningOfSecondPair = Number(input[1]);
    let differenceBetweenFirstPair = Number(input[2]);
    let differenceBetweenSecondPair = Number(input[3]);

    for (let firstPair = beginningOfFirstPair; firstPair <= beginningOfFirstPair + differenceBetweenFirstPair; firstPair++) {
        
        for (let secondPair = beginningOfSecondPair; secondPair <= beginningOfSecondPair + differenceBetweenSecondPair; secondPair++) {
            
            let isPrime1 = true;
            for (let i = 2; i < firstPair; i++) {
                if (firstPair % i === 0) {
                    isPrime1 = false;
                    break;
                }
            }

            if (isPrime1 === false) {
                continue;
            }

            let isPrime2 = true;
            for (let j = 2; j < secondPair; j++) {
                if (secondPair % j === 0) {
                    isPrime2 = false;
                break;
                }
            }

            if (isPrime2 === false) {
            continue;
            }

            if (isPrime1 && isPrime2) {
                let result = `${firstPair}${secondPair}`;
                console.log(result);
            }
        }
    }
}

primePairs(["10", "30", "9", "6"]);