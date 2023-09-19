function deleteByEmail() {
    const input = document.getElementsByTagName('input')[0].value;

    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const resultElement = document.getElementById('result');

    let match = false;

    for (const row of rows) {
        const emailToCheck = Array.from(row.querySelectorAll('td'))[1].textContent;

        if (emailToCheck === input) {
            row.remove();

            match = true;

            break;

        }
    }

    if (match) {
        resultElement.textContent = 'Deleted.';

    } else {
        resultElement.textContent = 'Not found.';
    }
}