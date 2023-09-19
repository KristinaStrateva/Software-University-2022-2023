function orbit(input) {
    let matrix = [];
    let matrixRows = input[0];
    let matrixCols = input[1];
    let starX = input[2];
    let starY = input[3];

    for (let i = 0; i < matrixRows; i++) {
        matrix.push([]);
    }

    for (let row = 0; row < matrixRows; row++) {
        for (let col = 0; col < matrixCols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starX), Math.abs(col - starY)) + 1;
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));
}

orbit([4, 4, 0, 0]);