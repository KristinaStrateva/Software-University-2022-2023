function rotateMatrix(input) {
    let rowsAndColumnsAmount = input.shift();
    let matrix = input.map(x => x.split(' ').map(Number));
    let resultMatrix = [];

    for (let i = 0; i < rowsAndColumnsAmount; i++) {
        let currRow = [];

        for (let j = rowsAndColumnsAmount - 1; j >= 0; j--) {
            let currColNum = matrix[j][i];

            currRow.push(currColNum);
        }

        resultMatrix.push(currRow);
    }

    resultMatrix.forEach(row => {
        console.log(row.join(' '));
    });
}

rotateMatrix([
    3,
    '3 11 7',
    '14 6 9',
    '10 5 2'
]);