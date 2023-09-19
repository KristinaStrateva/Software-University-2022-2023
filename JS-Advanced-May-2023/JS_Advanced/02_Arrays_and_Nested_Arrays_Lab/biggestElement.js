function biggestElement(matrix) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let currNum = matrix[i][j];

            if (currNum > biggestNum) {
                biggestNum = currNum;
            }
        }
    }

    return biggestNum;
}

console.log(biggestElement([
    [20, 50, 10],
    [8, 33, 145],
]));

console.log('----------------');

console.log(biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4],
]));