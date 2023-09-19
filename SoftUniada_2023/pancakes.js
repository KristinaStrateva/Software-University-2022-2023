function longestBite(input) {
    let pancake = input[0].split(' ').map(Number);
    let allResults = [];
    let pancakeLength = pancake.length;
    let maxSum = Number.MIN_SAFE_INTEGER;
    
    for (let i = 0; i < pancakeLength; i++) {
        let currNum = pancake[i];
        let currSum = currNum;

        if (currNum >= 0) {
            let result = [currNum];

            let index = i + 1;
            
            for (let j = index; j < pancakeLength; j++) {
                let nextNum = pancake[j];

                if (nextNum >= 0) {
                    currSum += nextNum;

                    result.push(nextNum);

                    index++;
                } else {
                    break;
                }
            }

            if (currSum >= maxSum) {
                maxSum = currSum;

                allResults.push({ maxSum: maxSum, length: result.length, index: [i, index - 1] });
                }

            i = index;
        }
    }

    let finalResult = ``;

    if (allResults.length > 0) {
        let sortedSum = allResults.sort((a, b) => {
            return b.maxSum - a.maxSum || b.length - a.length
        })
    
        finalResult = `${sortedSum[0].maxSum} ${sortedSum[0].index[0]} ${sortedSum[0].index[1]}`;
    }

    console.log(finalResult);
}

longestBite(['0 2'])