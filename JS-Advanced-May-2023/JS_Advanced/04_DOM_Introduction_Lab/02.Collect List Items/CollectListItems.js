function extractText() {
    let items = Array.from(document.getElementById('items').children);
    let result = items.map(li => li.textContent).join('\n');

    document.getElementById('result').value = result;
}