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
        const matrixColsAmount = matrixTable[0].length;

        for (let row = 0; row < matrixRowsAmount; row++) {
            const [firstNum, secondNum, thirdNum] = matrixTable[row];

            if (!(firstNum !== secondNum && firstNum !== thirdNum && secondNum !== thirdNum)) {
                isSolved = false;
                break;
            }

            for (let col = 0; col < matrixColsAmount; col++) {
                const currColFirstNum = matrixTable[0][col];
                const currColSecondNum = matrixTable[1][col];
                const currColThirdNum = matrixTable[2][col];

                if (!(currColFirstNum !== currColSecondNum && currColFirstNum !== currColThirdNum && currColSecondNum !== currColThirdNum)) {
                    isSolved = false;
                    break;
                }
            }

            if (!isSolved) {
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
        textParagraphElement.textContent = '';
    }
}
