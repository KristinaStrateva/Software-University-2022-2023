function spiralMatrix(width, height) {
    let matrix = [];
    let counter = 1;

    for (let i = 0; i < height; i++) {
        matrix.push([]);
    }

    for (let row = 0; row < height; row++) {
        let upperRowLength = width - row - 1;

        for (let upCol = row; upCol < upperRowLength + 1; upCol++) {
            matrix[row][upCol] = counter;

            counter++;
        }

        let rightColLength = height - row - 1;

        for (let rigthRow = row + 1; rigthRow < rightColLength + 1; rigthRow++) {
            matrix[rigthRow][rightColLength] = counter;

            counter++;
        }

        let bottomRowLength = width - row - 1;

        for (let bottomCol = bottomRowLength - 1; bottomCol >= row; bottomCol--) {
            matrix[bottomRowLength][bottomCol] = counter;

            counter++;
        }

        let leftColLength = height - row - 2;

        for (let leftRow = leftColLength; leftRow >= row + 1; leftRow--) {
            matrix[leftRow][row] = counter;

            counter++;
        }

    }
    
    matrix.forEach(row => console.log(row.join(' ')));
}

spiralMatrix(5, 5);