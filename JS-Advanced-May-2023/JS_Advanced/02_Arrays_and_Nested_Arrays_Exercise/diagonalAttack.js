function diagonalAttack(input) {
    let matrix = input.map(x => x.split(' ').map(Number));
    let matrixLength = matrix.length;
    let rigthDiagonalRowCounter = matrix.length - 1;

    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;

    for (let i = 0; i < matrixLength; i++) {
        leftDiagonalSum += matrix[i][i];
        rightDiagonalSum += matrix[rigthDiagonalRowCounter][i];

        rigthDiagonalRowCounter--;
    }

    if (leftDiagonalSum === rightDiagonalSum) {
        let counter = matrix.length - 1;

        for (let i = 0; i < matrixLength; i++) {
            for (let j = 0; j < matrixLength; j++) {
                if (i === j) {
                    if (i === Math.floor(matrixLength / 2)) {
                        counter--;
                        continue;
                    }

                    continue;
                }

                if (j === counter) {
                    counter--;
                    continue;
                }

                matrix[i][j] = leftDiagonalSum;
            }
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));
}

diagonalAttack(['5 3 12 3 1',

    '11 4 23 2 5',

    '101 12 3 21 10',

    '1 4 5 2 2',

    '5 22 33 11 1']);