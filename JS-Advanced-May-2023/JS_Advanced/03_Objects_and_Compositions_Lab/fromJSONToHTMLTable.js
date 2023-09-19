function fromJSONToHTMLTable(input) {
    let studentsInfo = JSON.parse(input);

    let finalResult = ['<table>'];
    
    finalResult.push(firstRow(studentsInfo));

    studentsInfo.forEach(studentInfo => {
        finalResult.push(otherRows(studentInfo));
    });

    finalResult.push('</table>');

    function firstRow(input) {
        let firstRowStr = '   <tr>';
        let keys = Object.keys(input[0]);

        keys.forEach(key => {
            firstRowStr += `<th>${escapeHTML(key)}</th>`;
        });

        firstRowStr += '</tr>';

        return firstRowStr;
    }

    function otherRows(input) {
        let otherRowStr = '   <tr>';
        let values = Object.values(input);

        values.forEach(value => {
            otherRowStr += `<td>${escapeHTML(value)}</td>`;
        });

        otherRowStr += '</tr>';

        return otherRowStr;
    }

    function escapeHTML(value) {

        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    return finalResult.forEach(line => console.log(line));
}

fromJSONToHTMLTable(['[{"Name":"Stamat","Price":5.5},{"Name":"Rumen","Price":6}]']);