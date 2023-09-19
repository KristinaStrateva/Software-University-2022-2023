function generateReport() {
    const outputElement = document.getElementById('output');

    const checkers = Array.from(document.querySelectorAll('thead tr th input'));
    const rows = Array.from(document.querySelectorAll('tbody tr'));

    let result = [];

    rows.forEach(row => {
        let currInfo = {};

        Array.from(row.querySelectorAll('td')).forEach((x, i) => {
            if (checkers[i].checked) {
                currInfo[checkers[i].name] = x.textContent;
            }
        })

        result.push(currInfo);
    });

    const parsedResult = JSON.stringify(result);

    outputElement.value = parsedResult;
}