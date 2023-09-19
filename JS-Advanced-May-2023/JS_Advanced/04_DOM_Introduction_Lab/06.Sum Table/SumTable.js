function sumTable() {
    let tableArr = Array.from(document.querySelectorAll('table tr td'));
    let tableArrLength = tableArr.length;

    let totalSum = 0;

    for (let i = 1; i < tableArrLength; i += 2) {
        let currSum = Number(tableArr[i].textContent);

        totalSum += currSum;
    }

    document.getElementById('sum').textContent = totalSum;
}