function solve() {
    const [quickCheckButtonElement, clearButtonElement] = document.querySelectorAll('button');
    const table = document.getElementsByTagName('table')[0];
    const textParagraphElement = document.querySelector('#check p');

    quickCheckButtonElement.addEventListener('click', quickCheck);
    clearButtonElement.addEventListener('click', clear);

    function quickCheck() {
        const tableRows = Array.from(document.querySelectorAll('tbody tr'));
        let matrixTable = [];
        let isSolved = true;

        for (const row of tableRows) {
            matrixTable.push(Array.from(row.querySelectorAll('input')).map(x => x.value));
        }

        const matrixRowsAmount = matrixTable.length;

        for (let i = 0; i < matrixRowsAmount; i++) {
            let currRow = matrixTable[i]
            let currCol = matrixTable.map(row => row[i]);

            let uniqueNumbersInRow = [... new Set(currRow)].length;
            let uniqueNumbersInCol = [... new Set(currCol)].length;

            if (currRow.length !== uniqueNumbersInRow || currCol.length !== uniqueNumbersInCol) {
                isSolved = false;
                break;
            }
         }

        if (isSolved) {
            table.style.border = '2px solid green';
            textParagraphElement.style.color = 'green';
            textParagraphElement.textContent = 'You solve it! Congratulations!';

        } else {
            table.style.border = '2px solid red';
            textParagraphElement.style.color = 'red';
            textParagraphElement.textContent = 'NOP! You are not done yet...';
        }
    }

    function clear() {
        const allInputs = Array.from(document.querySelectorAll('input'));

        allInputs.forEach(input => {
            input.value = '';
        });

        table.style.border = 'none';
        textParagraphElement.style.color = 'none';
        textParagraphElement.textContent = '';
    }
}