function solve() {
    const [quickCheckButtonElement, clearButtonElement] = document.querySelectorAll('button');
    const table = document.getElementsByTagName('table')[0];
    const textParagraphElement = document.querySelector('#check p');

    quickCheckButtonElement.addEventListener('click', quickCheck);
    clearButtonElement.addEventListener('click', clear);

    function quickCheck() {
        const matrixTable = Array
            .from(document.querySelectorAll('tbody tr'))
            .map(row => Array.from(row.querySelectorAll('input'))
                .map(x => Number(x.value)));
        
        let isValidSudomu = isValid(matrixTable);

        table.style.border = isValidSudomu ? '2px solid green' : '2px solid red';
        textParagraphElement.style.color = isValidSudomu ? 'green' : 'red';
        textParagraphElement.textContent = isValidSudomu ? 'You solve it! Congratulations!' : 'NOP! You are not done yet...';
    }

    function isValid(arr) {
        for (let row = 0; row < arr.length; row++) {
            let rowData = createCheckObject(arr);
            let colData = createCheckObject(arr);

            for (let col = 0; col < arr[row].length; col++) {
                let currRowCell = arr[row][col];
                let currColCell = arr[col][row];

                rowData[currRowCell]++;
                colData[currColCell]++;

            }

            const rowValues = Object.values(rowData);
            const colValues = Object.values(colData);

            const isValidRow = rowValues.some(x => x !== 1);
            const isValidCol = colValues.some(x => x !== 1);

            if (rowValues.length > arr.length || isValidRow || colValues.length > arr.length || isValidCol) {
                return false;
            }
        }

        return true;
    }

    function createCheckObject(arr) {
        let obj = {};

        for (let i = 0; i < arr.length; i++) {
            obj[i + 1] = 0;
        }

        return obj;
    }

    function clear() {
        Array.from(table.querySelectorAll('input')).map(x => x.value = '');

        table.style.border = 'none';
        textParagraphElement.textContent = '';
    }
}