function equalNeighbours(matrix) {
    let equalPairsAmount = 0;
    let matrixLength = matrix.length;

    for (let i = 0; i < matrixLength; i++) {
        let rowLength = matrix[i].length;

        for (let j = 0; j < rowLength; j++) {
            let currNum = matrix[i][j];

            if (i !== matrixLength - 1) {
                if (currNum === matrix[i][j + 1]) {
                    equalPairsAmount++;
                }

                if (currNum === matrix[i + 1][j]) {
                    equalPairsAmount++;
                }

            } else {
                if (currNum === matrix[i][j + 1]) {
                    equalPairsAmount++;
                }
            }
        }
    }

    return equalPairsAmount;
}

console.log(equalNeighbours([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4'],
]));

console.log('----------------');

console.log(equalNeighbours([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5'],
]));