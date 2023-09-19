function pancakes(input) {
    let pancake = input[0].split(' ').map(Number);
    let pancakeLength = pancake.length;

    let allPieces = { maxSum: 0, piecesIndexes: [] };
    let currPiece = [];
    let sum = 0;
    let startIndex = 0;
    let endIndex = 0;

    for (let i = 0; i < pancakeLength; i++) {
        let currNum = pancake[i];
        let currSum = sum + currNum;

        if (currSum >= sum || i === 0) {
            if (currNum < 0) {
                continue;
            }
            
            if (sum === 0 && currNum !== 0) {
                currPiece.push(i);
            }

            sum += currNum;

        } else {
            if (sum >= allPieces.maxSum) {
                currPiece.push(i - 1);
                allPieces.maxSum = sum;
                allPieces.piecesIndexes.push(currPiece);
            }

            currPiece = [];
            sum = 0;
        }

        if (i === pancakeLength - 1 && currSum >= sum) {
            currPiece.push(i);
            allPieces.piecesIndexes.push(currPiece);
        }
    }

    
    let sortedPieces = Object.entries(allPieces)[1][1].sort((a, b) => {
        return b[2] - a[2] || (b[1] - b[0] + 1) - (a[1] - a[0] + 1);
    });
    
    console.log(`${allPieces.maxSum} ${sortedPieces[0][0]} ${sortedPieces[0][1]}`);
}

pancakes(['-3 2 2 -2 1 -4 0 4 -10 1 3']);