function rowInPascalsTriangle(number) {
    let prevRow = [1];

    for (let i = 1; i <= number; i++) {
        let currRow = [1];

        if (prevRow.length >= 2){
            for (let j = 1; j < prevRow.length; j++) {
                currRow.push(prevRow[j] + prevRow[j - 1]);
            }
        }

        currRow.push(1);
        prevRow = currRow;
    }

    console.log(prevRow.join(' '));
}

rowInPascalsTriangle(22)