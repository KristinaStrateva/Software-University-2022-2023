function diagonalSums(matrix) {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    let matrixLength = matrix.length;

    for (let i = 0; i < matrixLength; i++) {
        leftDiagonalSum += matrix[i][i];

        rightDiagonalSum += matrix[i][matrixLength - 1 - i];
    }

    console.log(`${leftDiagonalSum} ${rightDiagonalSum}`);
}

diagonalSums([
    [20, 40],
    [10, 60],
]);

console.log('-----------------');

diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89],
]);