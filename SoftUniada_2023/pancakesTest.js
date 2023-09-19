function longestBite(input) {
    let pancake = input[0].split(' ').map(Number);
    let allResults = [];
    let pancakeLength = pancake.length;
    let maxSum = Number.MIN_SAFE_INTEGER;
    
    for (let i = 0; i < pancakeLength; i++) {
        let currNum = pancake[i];
        let nextNum = pancake[i + 1];
        let currSum = currNum + nextNum;

        if (currSum >= maxSum) {
            maxSum = currSum;
            let initialCurrSum = currSum;
            let initialMaxSum = maxSum;

            for (let j = i + 2; j < pancakeLength; j++) {
                currSum += pancake[j];

                if (currSum >= maxSum) {
                    maxSum = currSum;
                }
            }

            for (let k = i - 1; k >= 0; k++) {
                initialCurrSum += pancake[k];

                if (initialCurrSum >= initialMaxSum) {
                    initialMaxSum = initialCurrSum;
                }
            }

            maxSum = Math.max(maxSum, initialMaxSum);
            
            allResults.push({[maxSum]: [currNum, nextNum]})
        }
    }

    console.log(allResults)

}

longestBite(['4 -7 2 5 -9 3 1 2']);
longestBite(['4 -4 2 5 -9 3 1 1 1 1 -4']);
longestBite(['-3 2 2 -2 1 -4 0 4 -10 1 3'])